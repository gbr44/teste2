const fs = require('node:fs');

const config = {
    owner: [process.env.OWNER || "6283136099660"],
    name: process.env.NAME || "ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ",
    ownername: process.env.OWNERNAME || 'ʟᴇᴏᴏxᴢʏ', 
    ownername2: process.env.OWNERNAME2 || 'ᴅᴇᴋᴜ',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wagc: 'https://chat.whatsapp.com/CoMnxl1dttWKGW9NUs8j03',
    saluran: '120363335989645846@newsletter', 
    jidgroupnotif: '120363250393272873@g.us', 
    saluran2: '120363335989645846@newsletter', 
    jidgroup: '120363250393272873@g.us', 
    jidch: '120363335989645846@newsletter', 
    sessions: "sessions",
    sticker: {
      packname: "〆 ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ",
      author: "by : xzhiraa"
    },
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Lu siapa bukan Admin group",
      grootbotbup: "*( Denied )* Jadiin Yuta-Botz admin dulu baru bisa akses",
   },
   database: process.env.DATABASE || "hanako-db",
   tz: process.env.TZ || "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
