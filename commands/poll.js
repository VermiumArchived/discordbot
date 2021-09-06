const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Poll')
        .addStringOption(option => option.setName('message').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice1').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice2').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice3').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice4').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice5').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice6').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice7').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice8').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice9').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice10').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice11').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice12').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice13').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice14').setDescription('Enter a message'))
        .addStringOption(option => option.setName('choice15').setDescription('Enter a message')),

    async execute(interaction) {

        const botAvatar = interaction.client.user.displayAvatarURL();

        const title = interaction.options.getString('message');
        const choice1 = interaction.options.getString('choice1')

        const description = function() {
            if (choice1) { console.log("found") }
        }

        const embed = {
            color: 0x0099ff,
            title: `${title}`,
            description: description,
            timestamp: new Date(),
            footer: {
                text: 'Made by Zyner',
                icon_url: botAvatar,
            },
        };

        const message = await interaction.reply({ embeds: [embed], fetchReply: true });
        message.react('👍');
        message.react('👎')
    },
};