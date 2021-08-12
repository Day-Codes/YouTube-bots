const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "die",
  aliases: ["murder"],
  description:("Vote"),
	execute(message, args) {
const wallpapers = [
   'you kill the user with a shotgun',
   'you kill this user with a bat',
   'you kill this user with a toy doll',
   'you kill this user with a stove',
   'you kill this user with a bed',
   'you kill this user with a foot'
   // You can add as many as you want
  ];
  // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
  const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  message.reply(response);
 }
};
