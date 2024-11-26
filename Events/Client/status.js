const { ActivityType } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");
const config = require("../../config.json");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {


    client.user.setPresence({
      activities: [{ name: `en Clan AboveAll `, type: ActivityType.Streaming, url: "https://www.twitch.tv/DazerGP" }],
      status: "idle",
    });

    loadCommands(client); // Cargar comandos
  },
};
