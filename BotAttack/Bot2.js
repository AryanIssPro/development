const mineflayer = require('mineflayer');

const playerName = 'blalaal';

let bot;
let hasLoggedIn = false; // Prevent multiple executions

// ANSI escape codes for colors
const green = '\x1b[32m';
const reset = '\x1b[0m';  // Reset to default color

function createBot() {
    bot = mineflayer.createBot({
<<<<<<< HEAD
        host: 'DEADLIEST_SMP_196.aternos.me',
        port: 47297,
        username: 'FakeBot' + Math.random().toString(36).substring(7),
=======
        host: '142.93.219.201',
        port: 25565,
        username: Math.random().toString(36).substring(7),
>>>>>>> d1e797629fec88baca3ee0c5aa9e833c043e1492
        version: '1.21.1'
    });

    bot.on('spawn', async () => {
        if (hasLoggedIn) return;
        hasLoggedIn = true;
        console.log('Bot has spawned!');

        // Register and login
        bot.chat('/register iamhacker');

        // Move 2 blocks forward
        //bot.setControlState('forward', true);
        //await wait(100);
        //bot.setControlState('forward', false);

        // Connect to survival server
        await wait(50);
        bot.chat('/baltop');
    });

    // Listen for all chat messages
    bot.on('message', (message) => {
        console.log(message.toString());

        // Check if the PvPManager message appears
<<<<<<< HEAD
        if (message.toString().includes('logged in')) {
            bot.chat('Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed!');
=======
        if (message.toString().includes('Welcome! You are protected against PvP for 5 minutes')) {
            bot.chat(`/pay ${playerName} 1000`);
            //bot.chat('Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed! Hahaha, this server is boomed!');
            //bot.chat('SaadX90 is the best developer!');
>>>>>>> d1e797629fec88baca3ee0c5aa9e833c043e1492
        }

    });

    bot.on('chat', (username, message) => {
        console.log(`${username}: ${message}`);
    });

    bot.on('error', (err) => {
        console.error('Error:', err);
    });

    bot.on('end', () => {
        console.log('Bot has disconnected.');
    });

    bot.on('kicked', (reason) => {
        console.log('Kicked:', reason);
    });
}

// Helper function for delays
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start the bot for the first time
createBot();
