const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "darkrate",
  aliases: ["dr"],
  description:("Vote"),
	execute(message, args) {
  const rating = Math.floor(Math.random() * 100) + 1
  let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("cutie machine")
      .setDescription(`This user is ${rating}% a bad person and dark`)
      .setColor("RANDOM");



    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};


