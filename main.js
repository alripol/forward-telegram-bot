const TelegramBot = require('node-telegram-bot-api');

const token = '5904587129:AAEaVyxVpbJyStR5pQ69S-PkShXvYVi7AQU';
const sourceChatId = -1001895790577; 
const targetChatId = -1001845390420; 

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (chatId === sourceChatId) {
    bot.forwardMessage(targetChatId, chatId, msg.message_id);
  }
});
