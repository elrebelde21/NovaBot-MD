let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*γ πππππ γ*\n

*π½πππππ:* 
${groupMetadata.subject}

*π²ππππππ πππ πΆππππ:* 
@${m.chat.split`-`[0]}

*π°πππππ:*
${listAdmin}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['admin']
handler.tags = ['group']
handler.command = /^(admin|admins)$/i
handler.register = true

handler.group = true

module.exports = handler
