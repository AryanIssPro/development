const mineflayer = require('mineflayer');

function createFakePlayer() {
    const bot = mineflayer.createBot({
        host: 'play.badmosmc.fun',
        port: 25565,
        username: 'FakeBot' + Math.random().toString(36).substring(7),
        version: '1.21.1'
    });

    bot.on('spawn', () => {
        console.log('Fake player joined');
        
        // Register the bot with a delay
        setTimeout(() => {
            bot.chat('/register iamhacker');
        }, 10000); // Delay of 3 seconds before registration

        // Send "hi" every 10 seconds
        setInterval(() => {
            bot.chat('hi');
        }, 10000); // 10 seconds interval
    });

    bot.on('error', err => {
        console.log('Error:', err);
    });
}

// Continuously spawn fake players
setInterval(createFakePlayer, 10000);
