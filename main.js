const Discord = require("discord.js"); 
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })



const prefix = '/'
const fs = require('fs')


client.commands = new Discord.Collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js') )

for (const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command)
}
client.once('ready', () => {
	console.log('ready')
})



client.on('messageCreate', message  => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ (.*)/);
	const command = args.shift().toLocaleLowerCase()

	if (command === 'ping'){
		client.commands.get('ping').execute(message, args)
	} else if (command === 'gen AK it 2000'){
		client.commands.get('gen AK it 2000').execute(message, args, Discord)

	}
})



client.login('OTIyNDU0Mjg5NDkyODc3MzEy.YcBsgA.00jBoVgLMSXBcuaBCIq_KDkYYCY')






