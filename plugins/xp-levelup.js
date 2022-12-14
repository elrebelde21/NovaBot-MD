let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
π½ππππ *${user.level} (${user.exp - min}/${xp})*
ππ πππππ *${max - user.exp}* ππππ πππππ ππ πππππ! 
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`β±β ββββββββββββ ββ°
Β‘π΅π΄π»πΈπ²πΈππ°π²πΈπΎπ½π΄π π·π°π πππ±πΈπ³πΎ π³π΄ π½πΈππ΄π»! 
*${before}* -> *${user.level}*
πππ #ππ’ ππππ πππππππππ 
	β±β ββββββββββββ ββ°`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i
handler.register = false

module.exports = handler
