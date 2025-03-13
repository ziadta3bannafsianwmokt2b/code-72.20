const { ActionRowBuilder , ButtonBuilder  } = require ('discord.js');
const {prefix} = require ('./config.json');
function _0x3711(_0x48a200,_0x44fe4d){var _0x43044c=_0x4304();return _0x3711=function(_0x3711e9,_0xe0a076){_0x3711e9=_0x3711e9-0x178;var _0x7171b5=_0x43044c[_0x3711e9];return _0x7171b5;},_0x3711(_0x48a200,_0x44fe4d);}var _0x428287=_0x3711;(function(_0x4a23bc,_0x1972a3){var _0x598386=_0x3711,_0x40128e=_0x4a23bc();while(!![]){try{var _0xa37c82=parseInt(_0x598386(0x182))/0x1+-parseInt(_0x598386(0x17a))/0x2*(-parseInt(_0x598386(0x17b))/0x3)+parseInt(_0x598386(0x179))/0x4+parseInt(_0x598386(0x17d))/0x5*(parseInt(_0x598386(0x17c))/0x6)+-parseInt(_0x598386(0x180))/0x7*(-parseInt(_0x598386(0x181))/0x8)+parseInt(_0x598386(0x178))/0x9+parseInt(_0x598386(0x184))/0xa*(-parseInt(_0x598386(0x17e))/0xb);if(_0xa37c82===_0x1972a3)break;else _0x40128e['push'](_0x40128e['shift']());}catch(_0xfe5c83){_0x40128e['push'](_0x40128e['shift']());}}}(_0x4304,0x6e106),console['log'](_0x428287(0x183)),console[_0x428287(0x17f)]('your\x20bot\x20is\x20ready!'),console[_0x428287(0x17f)]('code\x20by\x2072.20'),console['log']('Discord\x20id\x20>>\x20877717735801487360'),console[_0x428287(0x17f)]('progarmming\x20>>\x20\x20discord.gg/witon\x0aservices\x20>>\x20discord.gg/wick-s\x0acommunity\x20>>\x20discord.gg/wick-c\x0awicks\x20support\x20>>\x20discord.gg/kcz9VEBHp5'));function _0x4304(){var _0x1f3089=['5299LWzLES','4376PStTWb','571327bljLuW','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.___\x20\x20\x20\x20\x20\x20\x20\x20\x20___.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_________\x20________\x20\x20\x20\x20\x20\x20\x20\x20________\x20\x20_______\x20\x20\x20\x0a\x20\x20_____\x20\x20_____\x20\x20\x20\x20\x20__|\x20_/\x20\x20____\x20\x20\x20_\x20|__\x20\x20\x20___.__.\x20\x20/\x20\x20______\x20\x20\x5c_____\x20\x20\x20\x20\x20\x20\x20\x20\x20_____\x20\x20\x20\x20\x20\x20_\x20\x20\x20\x20\x0a\x20/\x20\x20\x20\x20\x20\x20__\x20\x20\x20\x20\x20/\x20__\x20|\x20_/\x20__\x20\x20\x20\x20|\x20__\x20\x20<\x20\x20\x20|\x20\x20|\x20\x20/\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20/\x20/\x20\x20____/\x20\x20\x20\x20\x20\x20\x20\x20/\x20\x20____/\x20/\x20\x20/_\x20\x20\x20\x0a|\x20\x20Y\x20Y\x20\x20\x20/\x20__\x20_/\x20/_/\x20|\x20\x20\x20___/\x20\x20\x20|\x20_\x20\x20___\x20\x20|\x20\x20/\x20\x20\x20\x20\x20/\x20\x20\x20\x20/\x20/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_/\x20\x20\x20|__|_|\x20\x20/(____\x20\x20/____\x20|\x20\x20___\x20\x20>\x20\x20|___\x20\x20/\x20/\x20____|\x20\x20/\x20\x20\x20\x20/____/\x20\x20_______\x20\x20\x20/\x20\x20_______\x20\x20_____\x20\x20/\x0a\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20\x20/\x20\x20/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/\x20\x20/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20\x20/\x20\x0a','9410yOVzCQ','7388505ZuupDG','1485408OcKhJE','10oVKxPZ','304236lZFYfi','165696tfaVOd','115yVwVOJ','33539jYJzZK','log'];_0x4304=function(){return _0x1f3089;};return _0x4304();}
client.on('messageCreate', async (message) => {
    if (message.content === `${prefix}embed`) {

        const embed = new EmbedBuilder()
            .setTitle('Wick Studio - Devs')
            .setDescription('made by : 72.20')
            .setColor('Random');


        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Wick Studio')
                    .setLabel('Wick Studio')
                    .setStyle('Primary'), 
                new ButtonBuilder()
                    .setCustomId('Wicks Support')
                    .setLabel('Wicks Support')
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
    } else if (interaction.customId === 'Wicks Support') {
        await interaction.reply({ content: 'https://discord.gg/kcz9VEBHp5', ephemeral: true });
    }
});
