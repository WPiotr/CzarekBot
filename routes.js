module.exports = [
    {
        keywords: ['cantine', 'kantyna'],
        handleFunc: (bot, message) => {
            const params = {};
    
            bot.postMessage(message.channel, 'Todays Cantine menu:', params);
        }
    },
    {
        keywords: ['dopamina'],
        handleFunc: (bot, message) => {
            const params = {};

            bot.postMessage(message.channel, 'Todays Dopamina menu:', params);
        }
    }
];