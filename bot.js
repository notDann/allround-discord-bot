const Discord = require('discord.js');
const client = new Discord.Client();

//set prefix
const prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("Watching the server", {type: "WATCHING"});
});

Client.on('message', (message) => {
    //if the user type the prefix "!" then the bot will read the text after the prefix
    //and run the command if it matches on of the commands that is set
    if(!message.content.startsWith(prefix)) return;
    //Displays embeded text with info about the server
    if(message.content.startsWith(prefix + "about")){
        const embed = new Discord.RichEmbed()
        .setTitle("About this server")
        .setColor(0x99ff99)
        .setDescription("This server is a FiveM RP server with the added realism")
        .setFooter("Thank you for checking us out", "")
        .setTimestamp()
        .addField("Server IP:",
          "127.0.0.1")
        .addField("Server Website", "www.website.com", true)
        .addBlankField(true)
        .addField("Apply for Job", "www.website.com", true);
      
        message.channel.send({embed});
    }
  });


//If a new client joins the server, the bot will greet the person
Client.on('guildMemberAdd', member => {
    member.guild.channels.get('450824434496962561').send('**' + member.user.username + '**, has joined the server!'); 
});
//if the client then leaves the server the bot will inform everyone
Client.on('guildMemberRemove', member => {
    member.guild.channels.get('450824434496962561').send('**' + member.user.username + '**, has left the server');
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
client.login(process.env.BOT_TOKEN);
