let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'šµšššššš šššššššššš\n\nš“šššššš: .fb https://facebook.com/xxxxxx'
  let res = await xfar.Facebook(text)
m.reply('*š“ššššš šš ššššššš...*')
conn.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Link Video: ${res.url}
`, m)

}
handler.help = ['fb <url>', 'facebook <url>']
handler.tags = ['downloader']
handler.command = /^fb|facebook$/i
handler.register = true


module.exports = handler
