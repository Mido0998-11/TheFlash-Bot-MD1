let handler = async (m, { conn, command, text }) => {
let love = `
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
*※فــ←ــعـاليـ←ـة الأ🛎جـــــــراس※*
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*

*الشــــ↓ـ🗣️ــ↓ـرح:*
*~↯:┊📜┊↯:~ الفعالية عبارة عن المشاركين لديهم 3 اجراس بمعنى 3 ارواح ، و المقدم يرسل صورة لشخصية من الانمي وعلى المشاركين ان يرسلوا اجراس* 

*➻ اول مشارك يرسل الجرس اولاً ويقوم بالاجابة عن الشخصية يربح نقطة ، وياخذ احد الاجراس من خصمة*

*~↯: ملاحظة╎ان كتبت الجملة بشكل خاطئ لا تحسب النقطة' تكليج 🚫⟭~*
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
*~تــ✍︎ــوقــيــع اداࢪة┊📜┊↯:~*   *~〘☬╎𝐑.𝐍.𝐍 𓆩❄𓆪 𝑺𝑶𝑼𝑳╎☬〙~*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الجرس|جرس3)$/i
export default handler
