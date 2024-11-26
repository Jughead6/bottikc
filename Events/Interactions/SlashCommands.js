const { ChatInputCommandInteraction, InteractionType } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command)
        return interaction.reply({
          content: "This command is outdated.",
          ephermal: true,
        });

      if (command.developer && interaction.user.id !== "1063305008705183866" )
        return interaction.reply({
          content: "This copmmand is only available to the developer.",
          ephermal: true,
        });

    }else {
      return;
    }
  },
};
