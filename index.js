// -------------------Guild join--------------------
client.on("guildCreate", guild => {
  const embed = new MessageEmbed()
  .setTitle("I have joined a new server")
  .setColor("GREEN")
  .setDescription(`I got added to ${guild.name}, with ${guild.memberCount} members\n\n Total servers: ${client.guilds.cache.size}`)
  .setTimestamp()

  const LogChannel = client.channels.cache.get("CHANNEL ID")
  LogChannel.send(embed)
});


// ------------------Guild Leave-----------------------
client.on("guildDelete", guild => {
  const embed = new MessageEmbed()
  .setTitle("I have left a server")
  .setColor("RED")
  .setDescription(`I got remove from ${guild.name}, that had ${guild.memberCount} members\n\n Total servers: ${client.guilds.cache.size}`)
  .setTimestamp()

  const LogChannel = client.channels.cache.get("CHANNEL ID")
  LogChannel.send(embed)
});
