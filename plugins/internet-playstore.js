let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama aplikasi', m)

  await m.reply('Searching...')
    let res = await fetch(`https://caliphapi.com/api/playstore/search?apikey=ELYASXD&q=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = json.result[0].icon
    let hasil = `*ββ γ ππππ πππππ γ ββ*

β’ *π½πΎπΌπ±ππ΄*: ${json.result[0].title}
β’ *π°πΏπΏ πΈπ³*: ${json.result[0].appId}
β’ *DEVELOPER*: ${json.result[0].developer}
β’ *π΄πππ°π³πΎ*: ${json.result[0].priceText}
β’ *HARGA*: ${json.result[0].price}
β’ *RATING*: ${json.result[0].scoreText}
β’ *DESKRIPSI*: ${json.result[0].summary}
β’ *πππ»*:  
${json.result[0].url}
`

    conn.sendButtonImg(m.chat, thumb, hasil, wm, 'Pencet', 'huuu', m)
}
handler.help = ['playstore'].map(v => v + ' <nama apk>')
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.register = true
handler.limit = true

module.exports = handler

/*let hxz = require('hxz-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .playstore coc'
  let res = await hxz.playstore(text)
conn.sendBut(m.chat, `*PLAY STORE*

NAMA: ${res[0].name}
DEVELOPER: ${res[0].developer}
LINK: ${res[0].link}`, wm, 'ok', 'huuu', m)

}
handler.help = ['playstore' <apk>]
handler.tags = ['internet']
handler.command = /^playstore$/i


module.exports = handlerhandler
*/
