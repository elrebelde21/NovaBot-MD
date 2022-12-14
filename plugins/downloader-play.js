//made by https://github.com/Paquito1923
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const { servers, yta, ytv } = require('../lib/y2mate')
let fs = require('fs')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uff. que esta buscando π€?\n\nejemplo:\n${usedPrefix + command} bad bunny`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'π½πΎ ππ΄ π΄π½π²πΎπ½πππ°ππΎπ½ ππ΄πππ»ππ°π³πΎπ'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'ππΎπ³πΎπ π»πΎπ ππ΄πππΈπ³πΎππ΄π π΅π°π»π»π°ππ½'
  if (yt2 === false) throw 'ππΎπ³πΎπ π»πΎπ ππ΄πππΈπ³πΎππ΄π π΅π°π»π»π°ππ½'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
let anu =  `
*ππΈπππ»πΎ:* ${title}
*πΏπ΄ππΎ π³π΄ π°ππ³πΈπΎ:* ${filesizeF}
*πΏπ΄ππΎ π³π΄ ππΈπ³π΄πΎ:* ${yt2.filesizeF}
*ππ΄πππΈπ³πΎπ:* ${usedServer}
*πππ»:* 
${vid.url}

`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: await (await fetch(thumb)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'GITHUB',
               url: 'https://github.com/elrebelde21/The-whatbot-MD',
             }

           },
               {
             quickReplyButton: {
               displayText: 'video',
               id: `.ytmp4 ${vid.url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: 'Audio',
               id: `.ytmp3 ${vid.url}`,
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler
