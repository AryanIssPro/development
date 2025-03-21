const { spawn } = require('child_process');

// Path to your script
const scriptPath = '/workspaces/development/BotAttack/Bot2.js';
const minDelay = 3000; // minimum delay in milliseconds
const maxDelay = 3500; // maximum delay in milliseconds

// ANSI escape code for red text
const red = '\x1b[31m';
const reset = '\x1b[0m';  // Reset to default color

// Function to get a random delay between minDelay and maxDelay
function getRandomDelay() {
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

// Function to calculate and log when the script will restart
function runScript() {
  console.log(`Starting ${scriptPath}...`);
  
  // Spawn the target script
  const child = spawn('node', [scriptPath], {
    stdio: 'inherit'
  });

  // Get a random delay for this loop iteration
  const randomDelay = getRandomDelay();

  // Set a timer to kill the process after randomDelay milliseconds
  const killTimer = setTimeout(() => {

    // Log in red the time when the script will restart
    console.log(`${red}The script will restart in ${randomDelay/1000} seconds`);
    
    console.log(`Time is up. Killing ${scriptPath}...${reset}`);
    child.kill('SIGINT');  // Kill the process after randomDelay
  }, randomDelay);

  // When the process exits, clear the timer and restart
  child.on('exit', (code, signal) => {
    clearTimeout(killTimer);
    console.log(`${scriptPath} exited (code: ${code}, signal: ${signal}). Restarting...\n`);
    setTimeout(runScript, randomDelay);
  });

  // Optional: handle errors from the child process
  child.on('error', (err) => {
    clearTimeout(killTimer);
    console.error(`Error spawning ${scriptPath}: ${err}`);
    // Optionally, you might decide to exit or try restarting after a delay.
    setTimeout(runScript, randomDelay);
  });
  child.on('quit', (code, signal) => {
    clearTimeout(killTimer);
    console.error(`Error spawning ${scriptPath}: ${code}, ${signal}`);
    // Optionally, you might decide to exit or try restarting after a delay.
    setTimeout(runScript, randomDelay);
  });
}

// Start the loop
runScript();
