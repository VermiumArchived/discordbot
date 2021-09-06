const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check latency of the bot'),
    async execute(interaction) {

        const botAvatar = interaction.client.user.displayAvatarURL();
        const latency = `${Date.now() - interaction.createdTimestamp}ms`;
        const apiLatency = `${Math.round(interaction.client.ws.ping)}ms`;

        const embed = {
            color: 0x0099ff,
            title: 'Ping',
            description: 'Current ping of the bot',
            thumbnail: {
                url: botAvatar,
            },
            fields: [{
                name: 'Latency',
                value: latency,
                inline: true,
            }, {
                name: 'API Latency',
                value: apiLatency,
                inline: true,
            }, ],
            timestamp: new Date(),
            footer: {
                text: 'Made by Zyner',
                icon_url: botAvatar,
            },
        };

        await interaction.reply({ embeds: [embed] });
    },
};