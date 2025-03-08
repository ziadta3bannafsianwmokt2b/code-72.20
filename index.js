const {prefix} = require ('./config.json');
const {ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
client.on('messageCreate', async (message) => {
    if (message.content === `${prefix}embed`) {
        
        const embed = new EmbedBuilder()
            .setTitle('72.20')
            .setDescription('Id :877717735801487360')
            .setColor('#00FF00');

       
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Premiuma Bot Support')
                    .setLabel('Support')
                    .setStyle('Primary'), // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                new ButtonBuilder()
                    .setCustomId('Premiuma Community')
                    .setLabel('Community')
                    .setStyle('Success'),
                new ButtonBuilder()
                    .setURL('https://github.com/ziadta3bannafsianwmokt2b')
                    .setLabel('لينك خارجي')
                    .setStyle('Link')
            );

        
        await message.channel.send({ embeds: [embed], components: [row] });
    }
});


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'Premiuma Bot Support') {
        await interaction.reply({ content: 'https://discord.gg/KXGnFx4TDK', ephemeral: true });
    } else if (interaction.customId === 'Premiuma Community') {
        await interaction.reply({ content: 'https://discord.gg/3PtaUU9Wnn', ephemeral: true });
    }
});
