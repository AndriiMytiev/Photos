import axios from 'axios';

export const useTelegramBot = (botToken, chatId, message) => {
	axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
		chat_id: chatId,
		text: message,
	});
};