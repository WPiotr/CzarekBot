module.exports = {
    Cantine: (bot, message) => {
        const params = {};

        bot.postMessage(message.channel, 'Todays Cantine menu:', params);
    }

}