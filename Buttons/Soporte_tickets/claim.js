const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: `claim`,
    },
    async execute(interaction, client) {
      
        const rol_staff = interaction.member.roles.cache.get("1085625823991701545") // <<<<<<<<<< ROL[ID] DE STAFF

        if(!rol_staff) return interaction.reply({ content: `🚫 **No tienes permitido usar este boton**`, ephemeral: true })

        const embed = new EmbedBuilder()
        .setTitle(`📩 **Tickets** 📩`)
        .setDescription(`📌 **El ticket fue claimeado, por el staff: <@${interaction.user.id}>**`)
        .setTimestamp()
        .setColor(`#2b2d31`)

        if(rol_staff) {

            await interaction.channel.edit({
                name: `📌-renyo-tickets`,
            })

            return interaction.reply({ embeds: [embed] })

        }

    },
};