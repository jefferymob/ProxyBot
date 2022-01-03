const { MessageAttachment, MessageEmbed } = require('discord.js');


   module.exports = {
    name: 'gen AK it 2000',
    description: 'This is a generator command',
    execute(message, args, Discord){
        const file = new MessageAttachment('proxytest1.txt')
        const exampleEmbed = new MessageEmbed()
        .setTitle('Generator')

        message.channel.send({embeds: [exampleEmbed], files: [file]})
        
        
     
     
    }
    
}