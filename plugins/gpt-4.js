import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {

    if (!text) throw "يرجى كتابة نص للسؤال، على سبيل المثال: .بوت ما هي أركان الإسلام؟";

    try {
        await conn.sendMessage(m.chat, { text: "انتظر لحظة... 💭" }, { quoted: m });

        const kurosakiApi = 'https://kurosaki-api-3mk.osc-fr1.scalingo.io/api/ai/gpt4?q=' + encodeURIComponent(text);
        var response = await fetch(kurosakiApi);
        var res = await response.json();

        if (res.status) {
            if (res.kurosaki) {
                await conn.sendFile(m.chat, 'https://telegra.ph/file/2d4df0601b61da5e07be7.jpg', 'image.png', res.kurosaki, m, { caption: res.kurosaki });
            } else {
                await conn.sendMessage(m.chat, { text: "لم يتم العثور على نتيجة مناسبة لإجابتك. حاول مرة أخرى." }, { quoted: m });
            }
        } else {
            await conn.sendMessage(m.chat, { text: "حدث خطأ أثناء محاولة الحصول على الإجابة. الرجاء المحاولة لاحقاً." }, { quoted: m });
        }
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { text: "فشل، الرجاء المحاولة في وقت لاحق." }, { quoted: m });
    }
};

handler.command = ['gpt4', 'بوت'];
handler.tags = ['ai'];
handler.help = ['gpt4 <النص> - للحصول على إجابة باستخدام GPT-4'];

export default handler;
