const mineflayer = require('mineflayer');

function createFakePlayer() {
    const bot = mineflayer.createBot({
        host: '142.93.219.201',
        port: 25565,
        username: 'blalaal',
        version: '1.21.1'
    });

    bot.on('spawn', async () => {
        console.log('Bot has spawned!');

        // Register and login

        // Move 2 blocks forward
        bot.setControlState('forward', true);
        await wait(100);
        bot.setControlState('forward', false);

        // Connect to survival server
        await wait(5000);
        bot.chat('/server survival');
    });

    bot.on('message', (message) => {
        console.log(message.toString());

        // Check if the PvPManager message appears
        if (message.toString().includes('Welcome! You are protected against PvP for 5 minutes')) {
            console.log('connected to survival')
        }

    });

    bot.on('error', err => {
        console.log('Error:', err);
    });
    
    bot.on('end', () => {
        console.log('Bot has disconnected.');
    });

    bot.on('kicked', (reason) => {
        console.log('Kicked:', reason);
    });
    
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

createFakePlayer();