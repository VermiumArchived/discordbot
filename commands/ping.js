const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check latency of the bot"),
  async execute(interaction) {
    const embed = {
      color: 0x40887b,
      title: "Ping",
      description: "Current latency of the bot.",
      fields: [
        {
          name: "⏱️ Latency",
          value: `${Date.now() - interaction.createdTimestamp}ms`,
          inline: true,
        },
        {
          name: "📦 API Latency",
          value: `${Math.round(interaction.client.ws.ping)}ms`,
          inline: true,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "Made by Zyner",
        icon_url: interaction.client.user.displayAvatarURL(),
      },
    };
    await interaction.reply({ embeds: [embed] });
  },
};
