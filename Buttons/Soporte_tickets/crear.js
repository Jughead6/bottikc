const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ChannelType, PermissionsBitField } = require('discord.js');

module.exports = {
    data: {
        name: `tickets`,
    },
    async execute(interaction, client, args) {

      const rol_staff = args[0];

      const canal = await interaction.guild.channels.create({
        name: `renyo-tickets`,
        type: ChannelType.GuildText,
        parent: '1310652911965048863',
      });

      canal.permissionOverwrites.create(interaction.user.id, {
        ViewChannel: true,
        SendMessages: true,
      });

      canal.permissionOverwrites.create(canal.guild.roles.everyone, {
        ViewChannel: false,
        SendMessages: false,
      });

      canal.permissionOverwrites.create(rol_staff, {
        ViewChannel: true,
        SendMessages: true,
      });
      

      await interaction.reply({
        content: `✅ **El ticket fue abierto correctamente <#${canal.id}>**`,
        ephemeral: true,
      });
      
        const embed = new EmbedBuilder()
        .setTitle(`📩 **Tickets** 📩`)
        .setDescription(`🎟️ **Bienvenido a tu nuevo ticket, espera a que un staff responda**`)
        .setTimestamp()
        .setColor(`#2b2d31`)

        const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("close")
        .setLabel("🗑️")
        .setStyle(ButtonStyle.Secondary),

        new ButtonBuilder()
        .setCustomId("transcript")
        .setLabel("📜")
        .setStyle(ButtonStyle.Secondary),

        new ButtonBuilder()
        .setCustomId("claim")
        .setLabel("📌")
        .setStyle(ButtonStyle.Secondary),


      )

    canal.send({ content: `👉 **Bienvenido al ticket** <@${interaction.user.id}>` })
    canal.send({ embeds: [embed], components: [button] });
  }
}