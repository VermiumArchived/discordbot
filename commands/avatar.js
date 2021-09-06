const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Avatar')
        .addUserOption(option => option.setName('user').setDescription('Select a user')),

    async execute(interaction) {

        const botAvatar = interaction.client.user.displayAvatarURL();

        const user = interaction.options.getUser('user') || interaction.user;

        const embed = {
            color: 0x0099ff,
            title: user.username + "'s Avatar",
            image: {
                url: user.avatarURL(),
            },
            timestamp: new Date(),
            footer: {
                text: 'Made by Zyner',
                icon_url: botAvatar,
            },
        };

        await interaction.reply({ embeds: [embed] });
    },
};