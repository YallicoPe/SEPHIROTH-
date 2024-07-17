const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Te Presento A Continuación El Canal De Dragon Bot 🇦🇱*

> Grupo Oficial Donde Te Informaremos Todo Sobre Dragón Bot , Al Igual Que Es Un Grupo De Prueba Por Si Deseas Comprar :

https://chat.whatsapp.com/LHo0RmYd3pxAQzp24NYcTV`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/Yallico.owner/`},
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
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
