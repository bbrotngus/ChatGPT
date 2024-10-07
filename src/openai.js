import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function sendMsgToOpenAI(message) {
  await delay(3000);
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "당신은 다정한 소개팅 상대입니다." },
      { role: "user", content: message }
    ],
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return res.choices[0].message.content;
}