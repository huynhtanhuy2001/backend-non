require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.setWebHook('https://nonv1.vercel.app/api/bot.js');

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "Open Non Website", url: "https://nonv1.vercel.app/" }],
        [{ text: "Open Non App ", url: "t.me/NonTokenBot/nontokenapp" }]
      ]
    })
  };

  bot.sendMessage(chatId, 'NON | The first master node on telegram  ', options);
});
console.log("SERVER IS RUNNING");
