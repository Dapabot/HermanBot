let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *AXIS:* [6283103592954]
┣➥ *Dana:* [--]
┣➥ *Gopay:* [6285868010957]
┣➥ *Ovo:* [--]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/48459088084*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
