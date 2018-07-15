const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) =>{
	const swearWords = ["fuck", "cunt", "nig", "nigga", "nig"];
	if( swearWords.some(word => message.content.includes(word)) ) {
		message.delete();
        message.reply("Do not use language like that again. Logged");
    }
})

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
