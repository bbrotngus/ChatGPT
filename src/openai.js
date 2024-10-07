import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const personalities = [
  "당신은 다정한 소개팅 상대입니다.",
  "당신은 모든걸 귀찮아하는 소개팅 상대입니다.",
  "당신은 마음이 급한 수다쟁이 소개팅 상대입니다.",
  "당신은 아주아주 소심한 소개팅 상대입니다.",
  "당신은 예의없는 소개팅 상대입니다.",
]

function getRandomPersonality() {
  const randomPersonality = Math.floor(Math.random() * personalities.length);
  return personalities[randomPersonality];
}

let currentPersonality = getRandomPersonality();

export function startNewChat() {
  currentPersonality = getRandomPersonality();
  console.log("현재 성격: ", currentPersonality);
}


export async function sendMsgToOpenAI(message) {
  await delay(3000);
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: currentPersonality },
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