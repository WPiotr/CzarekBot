const SlackBot = require('slackbots');
const Routes = require('./routes')
// create a bot
const bot = new SlackBot({
    token: 'xoxb-814928293713-822888858000-GA9CwdmWFjOc68sPKMaQ6h7E',  
    name: 'CzarekBot'
});

bot.on('start', function() {
    const params = {
        icon_emoji: ':parrot:'
    };
    
    bot.postMessageToChannel('general', 'Hello world!', params);
});

bot.on('message', message => {
    if(message.type === 'message' && message.subtype !== 'bot_message'){
        handleMessage(message);
    }
});

function handleMessage(message){
    Routes.forEach( route => {
        if(route.keywords.some(keyword => message.text.includes(keyword))){
            route.handleFunc(bot, message);
        }
    });
}