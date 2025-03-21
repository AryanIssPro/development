const mineflayer = require('mineflayer');

function createFakePlayer() {
    const bot = mineflayer.createBot({
<<<<<<< HEAD
        host: 'limited-grave.gl.joinmc.link',
        
        username: 'FakeBot' + Math.random().toString(36).substring(7),
        version: '1.21.4'
=======
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

>>>>>>> d1e797629fec88baca3ee0c5aa9e833c043e1492
    });

    bot.on('spawn', async () => {
        console.log('Bot has spawned!');

        // Register and login
        bot.chat('/register iamhacker');

        await wait(50);
        bot.chat('/server survival');
    });

    // Listen for all chat messages
    bot.on('message', (message) => {
        console.log(message.toString());
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
    
    bot.on('end', () => {
        console.log('Bot has disconnected.');
    });

    bot.on('kicked', (reason) => {
        console.log('Kicked:', reason);
    });
    
}

<<<<<<< HEAD
// Helper function for delays
=======
>>>>>>> d1e797629fec88baca3ee0c5aa9e833c043e1492
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

<<<<<<< HEAD
createFakePlayer()
=======
createFakePlayer();
>>>>>>> d1e797629fec88baca3ee0c5aa9e833c043e1492
