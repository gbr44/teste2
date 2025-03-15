const fs = require('node:fs')
  module.exports = {
  command: "channel",
  alias: ["credit"],
  category: ["info"],
  description: "List Contrubutor bot ini",
  async run(m, { sock, config, Func }) {
    let cap = `Join all channel hiraa
    
    Group Bot Wa New #1
    https://chat.whatsapp.com/KM6AHNSG8J17HBFuqRG96T
    Channel Wa #1
    https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F
    Channel Wa #2
    https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m
    Channel Wa #3
    https://whatsapp.com/channel/0029VaosPrH7oQhhJJnovL0r
 
mau membeli panel? atau vps? sc?
di hiraa aja wa.me/6289506997661
`;

await m.reply({
  document: fs.readFileSync("./image/doc.txt"),
fileName: Func.Styles(`Thank You To`),
mimetype: 'application/msword',
jpegThumbnail:await sock.resize(fs.readFileSync("./image/Hanako-replydoc.jpg"), 356, 200),
caption: cap,
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    forwardedNewsletterMessageInfo: {
        newsletterJid: config.saluran,
        serverMessageId: -1,
        newsletterName: `${Func.Styles(`Channel By: ${config.ownername}`)}`,
       }
     }
    });
  },
};