/*
> Recode script give credits to›
Giddy Tennor

📝 | Created By Giddy Tennor
🖥️ | Base Ori By Giddy Tennor 
📝 | Created By Giddy Tennor
📌 /Credits Giddy Tennor 
📱 /Chat wa:254756182478
👑 /Github: Tennor-modz 
✉️ /Email: giddytennor@gmail.com
*/
const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
