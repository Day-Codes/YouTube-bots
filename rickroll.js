
const fetch = require('node-fetch');
const superagent = require('superagent')

const { discord } = require("discord.js");



module.exports = {
  name: "freeboost",
  aliases: [""],
  description:("Vote"),
async execute(message, args) {
let commands = message.client.commands.array();  
  
  // Send message & Store reference to the message
 const msg = await (message.channel.send("https://discord.com/gifts/anhusV9kyrNdkVdaVr75zHmG"))


setTimeout(() => { 
msg.edit('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825');
}, 6000)
}
};
