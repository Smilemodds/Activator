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
const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
