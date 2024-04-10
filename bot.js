require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Lấy token API từ biến môi trường
const token = process.env.TELEGRAM_BOT_TOKEN;

// Tạo một bot Telegram mới sử dụng polling để lấy các cập nhật mới
const bot = new TelegramBot(token, {polling: true});

// Lắng nghe khi có người dùng nhấn vào nút /start
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
