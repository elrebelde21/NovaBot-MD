let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'πΈππππππ ππ πππππππ', m)

	axios.get(`http://hujanapi.xyz/api/apkpure?query=${text}&apikey=qrQuAVo14XfmRIr`).then ((res) => {
	 	let hasil = `
π½πππππ ππ ππ ππππππππππ : ${res.data.result.data.title}
π»πππ ππ ππππππππ : ${res.data.result.data.link}
ΒΏπππππππ πππππππππ ππππππππππππ? π΄ππππππ .apkdl (link)`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apk (kata kunci)']
handler.tags = ['tools']
handler.command = /^(apk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.register = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
