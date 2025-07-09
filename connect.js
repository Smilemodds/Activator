
const { default: makeWASocket, jidDecode, DisconnectReason, useMultiFileAuthState, Browsers, getContentType, proto, makeInMemoryStore } = require("@whiskeysockets/baileys");
const pino = require("pino");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { Boom } = require("@hapi/boom");

const createToxxicStore = require('./list/basestore');
const store = createToxxicStore('./store', {
  maxMessagesPerChat: 100,  
  memoryOnly: false 
});
let pairingCodeErrorShown = false;
const reconnectAttempts = {};
const pairingRequested = {}; 
function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach(file => {
            const curPath = path.join(folderPath, file);
            fs.lstatSync(curPath).isDirectory() ? deleteFolderRecursive(curPath) : fs.unlinkSync(curPath);
        });
        fs.rmdirSync(folderPath);
    }
}

async function startpairing(wiseNumber) {
    try {
        const sessionPath = `./list/pairing/${wiseNumber}`;

        if (!fs.existsSync(`${sessionPath}/creds.json`)) {
            console.warn(chalk.yellow(`[${wiseNumber}] No session found, starting fresh.`));
        }

        const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

        if (!state?.creds) {
            console.warn(chalk.red(`[${wiseNumber}] Invalid session state. Resetting.`));
            deleteFolderRecursive(sessionPath);
            return setTimeout(() => startpairing(wiseNumber), 5000);
        }

        const wise = makeWASocket({
            logger: pino({ level: "silent" }),
            printQRInTerminal: false,
            auth: state,
            version: [2, 3000, 1017531287],
            browser: Browsers.ubuntu("Edge"),
            getMessage: async key => {
                const jid = jidNormalizedUser(key.remoteJid);
                const msg = await store.loadMessage(jid, key.id);
                return msg?.message || '';
            },
            shouldSyncHistoryMessage: msg => {
                console.log(`\x1b[32mLoading Chat [${msg.progress}%]\x1b[39m`);
                return !!msg.syncType;
            }
        });

        store.bind(wise.ev);

        const keepAliveInterval = setInterval(() => {
            if (wise?.user) {
                wise.sendPresenceUpdate('available').catch(err => {
                    console.error("Keep-alive failed:", err.message);
                });
            }
        }, 1000 * 60 * 30);

        if (!state.creds.registered && wiseNumber && !pairingRequested[wiseNumber]) {
            pairingRequested[wiseNumber] = true;
            const phoneNumber = wiseNumber.replace(/[^0-9]/g, '');

            setTimeout(async () => {
                try {
                    let code = await wise.requestPairingCode(phoneNumber);
                    code = code?.match(/.{1,4}/g)?.join("-") || code;
                    fs.writeFileSync(`./Tele/pairing/pairing.json`, JSON.stringify({ code }, null, 2));
                } catch (err) {
                    if (!pairingCodeErrorShown) {
                        console.error("Error requesting pairing code:", err.stack || err.message);
                        pairingCodeErrorShown = true;
                    }
                }
            }, 1703);
        }

        wise.decodeJid = (jid) => {
            if (!jid) return jid;
            if (/:\d+@/gi.test(jid)) {
                const decode = jidDecode(jid) || {};
                return decode.user && decode.server && `${decode.user}@${decode.server}` || jid;
            }
            return jid;
        };

        wise.ev.on("messages.upsert", async chatUpdate => {
            try {
                const msg = chatUpdate.messages[0];
                if (!msg.message || msg.key.remoteJid === 'status@broadcast') return;
                const m = smsg(wise, msg, store);
                require("./wise")(wise, m, chatUpdate, store);
            } catch (err) {
                console.error("Error handling message:", err.stack || err.message);
            }
        });

        const badSessionRetries = {}; // Track retries per number By яαgємσ∂ѕ

wise.ev.on("connection.update", async update => {
    const { connection, lastDisconnect } = update;
    const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;

    try {
        if (connection === "close") {
            clearInterval(keepAliveInterval);

            switch (statusCode) {
                case DisconnectReason.badSession:
                    badSessionRetries[wiseNumber] = (badSessionRetries[wiseNumber] || 0) + 1;

                    if (badSessionRetries[wiseNumber] <= 6) {
                        console.log(chalk.yellow(`[${wiseNumber}] Bad session detected. Retrying (${badSessionRetries[wiseNumber]}/6) without deleting session...`));
                        pairingRequested[wiseNumber] = false;
                        return setTimeout(() => startpairing(wiseNumber), 3000);
                    } else {
                        console.log(chalk.red(`[${wiseNumber}] Bad session retry limit reached. Deleting session and starting fresh.`));
                        deleteFolderRecursive(sessionPath);
                        badSessionRetries[wiseNumber] = 0;
                        pairingRequested[wiseNumber] = false;
                        return setTimeout(() => startpairing(wiseNumber), 5000);
                    }

                case DisconnectReason.connectionClosed:
                case DisconnectReason.connectionLost:
                case DisconnectReason.restartRequired:
                case DisconnectReason.timedOut:
                case 405:
                    reconnectAttempts[wiseNumber] = (reconnectAttempts[wiseNumber] || 0) + 1;
                    if (reconnectAttempts[wiseNumber] <= 5) {
                        console.log(`[${wiseNumber}] attempting reconnect (${reconnectAttempts[wiseNumber]}/5)...`);
                        return setTimeout(() => startpairing(wiseNumber), 2000);
                    } else {
                        console.log(`[${wiseNumber}] max reconnect attempts reached.`);
                    }
                    break;

                case DisconnectReason.loggedOut:
                    deleteFolderRecursive(sessionPath);
                    pairingRequested[wiseNumber] = false;
                    console.log(chalk.bgRed(`${wiseNumber} disconnected (logged out).`));
                    break;

                default:
                    console.log("Unknown disconnect reason:", statusCode);
                    console.error("Disconnect error:", lastDisconnect?.error?.stack || lastDisconnect?.error?.message);
            }
        } else if (connection === "open") {
            console.log(chalk.bgGreen(`Rent bot is active on ${wiseNumber}`));
            reconnectAttempts[wiseNumber] = 0;
            badSessionRetries[wiseNumber] = 0; // Reset on successful connection

            try {
                await wise.sendMessage("254788460896@s.whatsapp.net", {
                    text: `Connected: ${wiseNumber}`
                });
                console.log(`Notified master of connection: ${wiseNumber}`);
            } catch (err) {
                console.error("Failed to notify master number:", err.stack || err.message);
            }
        }
    } catch (err) {
        console.error("Connection update error:", err.stack || err.message);
        setTimeout(() => startpairing(wiseNumber), 5000);
    }
         });

        wise.ev.on("creds.update", async creds => {
            try {
                await saveCreds();
            } catch (err) {
                console.error("Failed to save credentials:", err.stack || err.message);
            }
        });
    } catch (err) {
        console.error("Fatal error in startpairing:", err.stack || err.message);
        setTimeout(() => startpairing(wiseNumber), 5000);
    }
}

function smsg(sock, m, store) {
    const M = proto.WebMessageInfo;
    if (!m) return m;
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith('@g.us');
    m.sender = sock.decodeJid(m.fromMe && sock.user.id || m.participant || m.key.participant || m.chat || '');

    if (m.message) {
        m.mtype = getContentType(m.message);
        m.msg = (m.mtype === 'viewOnceMessage')
            ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)]
            : m.message[m.mtype];

        m.text = m.message?.conversation || m.msg?.caption || m.msg?.text || '';
        m.reply = (text, chatId = m.chat, options = {}) =>
            sock.sendMessage(chatId, { text }, { quoted: m, ...options });
    }

    return m;
}

module.exports = startpairing;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update detected in '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// By яαgємσ∂ѕ