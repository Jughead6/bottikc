const { Activity, ActivityType } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");

const config = require("../../config.json");

const mongoose = require("mongoose");
const mongoDBURL = config.mongopass;

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log("El cliente se ha iniciado");

    if (!mongoDBURL) return;

    await mongoose.connect(mongoDBURL || ``, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (mongoose.connect) {
      console.log(`Conectado a la base de datos con exito`);
    }

    loadCommands(client);
  },
};
