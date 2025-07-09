/*
> Recode script give credits to›
Giddy Tennor

📝 | Created By Giddy Tennor
🖥️ | Base Ori By Giddy Tennor 
📝 | Created By Giddy Tennor
📌 |Credits Giddy Tennor 
📱 |Chat wa:254756182478
👑 |Github: Tennor-modz 
✉️ |Email: giddytennor@gmail.com
*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "254107065646"
global.ownername = "MR SMILE"
global.botname = "ACTIVATOR"
global.author = "254107065646"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
global.packname = "ACTIVATORt"
global.author = "Mr Smile"

//=================================================//
global.egg = "15"
global.loc = "1"
global.nestid = "5"
global.domain = "https://ojan-ptero.panelhosting.xyz"
global.apikey = "ptla_UpmB8I6ClCLI7Qu2jyhsBIR9GK33yu2CSb8fK5wtSqb"
global.capikey = "ptlc_GYzrdAtm8DkuFDBRYg2L4TF5bhFPvxYeeR86ichBsih"
//=================================================//
global.menuMode = global.menuMode || 'nobutton';
global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})