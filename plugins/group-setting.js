let { groupSettingUpdate } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2But(m.chat, `
ejemplo:
*${usedPrefix + command} close*
*${usedPrefix + command} open*
	`.trim(), 'setting grup', 'open', '.grup 1', 'close', '.grup 0')
		throw false
	}
	await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grup <buka/tutup>']
handler.tags = ['group']
handler.command = /^(grup|group)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.register = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
