const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "weeb",
  aliases: ["anime"],
  description:("Vote"),
	execute(message, args) {
const wallpapers = [
   'https://tenor.com/view/anime-gif-11006663',
   'https://tenor.com/view/cute-anime-dancing-silly-happy-excited-gif-13462237',
   'https://tenor.com/view/anime-girl-cute-gif-15584894',
   'https://tenor.com/view/mimi-cute-anime-tap-gif-15633073',
   'https://tenor.com/view/smug-anime-face-gif-6194051',
   'https://tenor.com/view/neko-cat-ears-girl-anime-gif-12142150','https://tenor.com/view/social-l-ife-anime-school-me-gif-11021144','https://tenor.com/view/blush-anime-shy-cute-girl-gif-16149781'
   // You can add as many as you want
  ];
  // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
  const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  message.reply(response);
 }
};


