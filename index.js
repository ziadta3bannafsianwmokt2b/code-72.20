const { ActionRowBuilder , ButtonBuilder  }
const {prefix} = require ('./config.json');
client.on('messageCreate', async (message) => {
    if (message.content === `${prefix}embed`) {

        const embed = new EmbedBuilder()
            .setTitle('Wick Studio')
            .setDescription('72.20')
            .setColor('Random');


        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Wick Studio')
                    .setLabel('studio')
                    .setStyle('Primary'), 
                new ButtonBuilder()
                    .setCustomId('Wick Community')
                    .setLabel('community')
                    .setStyle('Success'),
                new ButtonBuilder()
                    .setURL('https://discord.gg/KXGnFx4TDK')
                    .setLabel('Premiuma')
                    .setStyle('Link')
            );

        
        await message.channel.send({ embeds: [embed], components: [row] });
    }
});


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'Wick Studio') {
        await interaction.reply({ content: 'discord.gg/witon', ephemeral: true });
    } else if (interaction.customId === 'Wick Community') {
        await interaction.reply({ content: 'discord.gg/wick-c', ephemeral: true });
    }
});
