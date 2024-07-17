const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `
𝗙𝗯 : https://web.facebook.com/profile.php?id=100094780575612
𝗜𝗻𝘀𝘁𝗮 : https://www.instagram.com/cristhofer_yallico
𝗪𝗽𝘀 : +51 926 933 818

𝗣𝗼𝗿 𝗦𝗶 𝗗𝗲𝘀𝗲𝗮𝘀 𝗖𝗼𝗺𝗽𝗿𝗮𝗿 𝗕𝗼𝘁 𝗣𝗿𝗼𝗽𝗶𝗼 , 𝗚𝗿𝘂𝗽𝗼 🇦🇱`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/alacran.bot.store/`},
    'mimetype': `application/${document}`,
    'fileName': `𝚈𝚊𝚕𝚕𝚒𝚌𝚘 𝙱𝚘𝚝 🇦🇱`, 
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/Yallico.owner/',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝚈𝚊𝚕𝚕𝚒𝚌𝚘 𝙱𝚘𝚝 🇦🇱',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/Yallico.owner/'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
