const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Information about the bot'),
    async execute(interaction) {

        const botAvatar = interaction.client.user.displayAvatarURL();

        const embed = {
            color: 0x0099ff,
            title: 'Information',
            description: 'This is Zyners official bot',
            thumbnail: {
                url: botAvatar,
            },
            fields: [{
                name: 'Official Discord Server',
                value: 'https://discord.gg/cqeZyxcAB4',
                inline: false,
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