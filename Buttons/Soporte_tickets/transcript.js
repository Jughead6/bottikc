const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const Transcript = require('discord-html-transcripts')

module.exports = {
    data: {
        name: `transcript`,
    },
    async execute(interaction, client) {
      
        const rol_staff = interaction.member.roles.cache.get("1085625823991701545") // <<<<<<<<<< ROL[ID] DE STAFF

        if(!rol_staff) return interaction.reply({ content: `🚫 **No tienes permitido usar este boton**`, ephemeral: true })

        if(rol_staff) {

            await interaction.channel.edit({
                name: `📜-renyo-tickets`,
            })

            return interaction.reply({ files: [await Transcript.createTranscript(interaction.channel)] });

        }

    },
};