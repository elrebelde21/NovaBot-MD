const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `ππ πππππ ππππππππππ\nπππππππ ππππππ π πππππππππππ? ${usedPrefix}unreg numero del serie`
  if (!Reg.test(text)) throw `π΅ππππππ ππππππππππ\n*${usedPrefix}daftar nombre.edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'π΄π ππππππ ππ πππππ ππππππ πππππ'
  if (!age) throw 'π»π ππππ ππ πππππ ππππππ πππππ'
  age = parseInt(age)
  if (age > 120) throw 'πΌππππ ππππ πππππ π πππ πππππ π'
  if (age < 5) throw 'ππ°πΎ ππ½ π±π΄π΄π±π΄ πππ΄ πΏππ΄π³π΄ π΄ππ²ππΈπ±πΈπ ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Daftar berhasil!

β­βγ ππππππππ γ
β π½πππππ: ${name}
β π΄πππ: ${age} aΓ±os
β πΏππππππ : ${prems.includes(who.split`@`[0]) ? 'β Si es un usuario premium' : 'β No es un usuario premium'}
β°ββββ
π½πππππ ππ πππππ:
${sn}
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
