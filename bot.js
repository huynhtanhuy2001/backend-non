require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token);

bot.setWebHook('https://nonv1.vercel.app/api/bot');

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: "Open Non", url: "https://nonv1.vercel.app/"}]
      ]
    })
  };

  bot.sendMessage(chatId, 'The first master node on telegram (@Dev Huy)', options);
});

module.exports = { bot };
