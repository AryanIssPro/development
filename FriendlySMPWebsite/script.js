let codespaceName = "ideal-doodle-r5xww6g6q4jhwq4";
let updateInterval;

function updateLinks() {
  document.getElementById('startServer').onclick = () => window.open(`https://${codespaceName}.github.dev/?autoStart=false`, '_blank');
  // Check if optional elements exist before setting their events or text
  if (document.getElementById('craftyPanel')) {
    document.getElementById('craftyPanel').onclick = () => window.open(`https://limited-grave.gl.at.ply.gg:2654/panel/dashboard`, '_blank');
  }
  if (document.getElementById('javaIP')) {
    document.getElementById('javaIP').textContent = "buying-hz.gl.joinmc.link";
  }
  if (document.getElementById('bedrockIP')) {
    document.getElementById('bedrockIP').textContent = "trade-occasions.gl.at.ply.gg";
  }
  if (document.getElementById('bedrockPort')) {
    document.getElementById('bedrockPort').textContent = "1525";
  }
}

function checkServerStatus() {
  const javaPlayersSpan = document.getElementById('javaPlayers');
  const javaStatus = document.getElementById('javaStatus');
  const javaPlayerList = document.getElementById('javaPlayerList');

  javaPlayersSpan.innerHTML = ""; // Clear previous players

  let totalPlayers = 0;

  // Fetch Java server data
  fetch("https://api.mcsrvstat.us/2/buying-hz.gl.joinmc.link")
    .then(response => response.json())
    .then(data => {
      if (data.online) {
        javaStatus.textContent = "Online";
        javaStatus.classList.add('online');
        javaStatus.classList.remove('offline');
        javaPlayerList.style.display = "block";

        if (data.players && data.players.online > 0 && data.players.list?.length > 0) {
          totalPlayers += data.players.list.length;
          data.players.list.forEach(name => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player-item');

            const icon = document.createElement('img');
            icon.src = "steve-icon.png";
            icon.classList.add('player-icon');

            const playerName = document.createElement('span');
            playerName.textContent = name;

            playerDiv.appendChild(icon);
            playerDiv.appendChild(playerName);
            javaPlayersSpan.appendChild(playerDiv);
          });
        }
      } else {
        javaStatus.textContent = "Offline";
        javaStatus.classList.add('offline');
        javaStatus.classList.remove('online');
        javaPlayerList.style.display = "none";
      }
    });

  // Fetch Bedrock server data
  fetch("https://api.mcsrvstat.us/2/transportation-carb.gl.at.ply.gg")
    .then(response => response.json())
    .then(data => {
      if (data.online && data.players && data.players.online > 0 && data.players.list?.length > 0) {
        totalPlayers += data.players.list.length;
        data.players.list.forEach(name => {
          const playerDiv = document.createElement('div');
          playerDiv.classList.add('player-item');

          const icon = document.createElement('img');
          icon.src = "steve-icon.png";
          icon.classList.add('player-icon');

          const playerName = document.createElement('span');
          playerName.textContent = name;

          playerDiv.appendChild(icon);
          playerDiv.appendChild(playerName);
          javaPlayersSpan.appendChild(playerDiv);
        });
      }

      // Show "no players" message if no one is online on either
      if (totalPlayers === 0) {
        const noPlayersMsg = document.createElement('div');
        noPlayersMsg.classList.add('player-item', 'no-players');
        noPlayersMsg.textContent = "No players online!";
        javaPlayersSpan.appendChild(noPlayersMsg);
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  updateLinks();
  startUpdatingStatus();
});


function startUpdatingStatus() {
  function update() {
    checkServerStatus();
  }
  update();

  document.addEventListener("visibilitychange", () => {
    clearInterval(updateInterval);
    if (document.hidden) {
      updateInterval = setInterval(update, 60000);
    } else {
      updateInterval = setInterval(update, 5000);
    }
  });
  updateInterval = setInterval(update, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  // Optional credentials toggle, if exists
  let credsButton = document.getElementById("toggleCredentials");
  if (credsButton) {
    let credentialsVisible = false;
    credsButton.addEventListener("click", function () {
      credentialsVisible = !credentialsVisible;
      document.getElementById("credentials").style.display = credentialsVisible ? "block" : "none";
      credsButton.textContent = credentialsVisible ? "Hide Credentials" : "Show Credentials";

      if (credentialsVisible) {
        document.getElementById("githubUser").textContent = "Hidden";
        document.getElementById("githubPass").textContent = "Hidden";
        document.getElementById("craftyUser").textContent = "Hidden";
        document.getElementById("craftyPass").textContent = "Hidden";
      }
    });
  }

  updateLinks();
  startUpdatingStatus();
});

const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

// Apply saved theme on load
function applyTheme(theme) {
  if (theme) {
    body.classList.add(theme);
    toggleThemeButton.textContent = theme === 'light-theme' ? 'Switch to Dark Theme' : 'Switch to Light Theme';
  } else {
    body.classList.add('dark-theme');
    toggleThemeButton.textContent = 'Switch to Light Theme';
  }
}

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme);

// Handle theme toggle
toggleThemeButton.addEventListener('click', () => {
  const isLightTheme = body.classList.contains('light-theme');

  if (isLightTheme) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    toggleThemeButton.textContent = 'Switch to Light Theme';
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    toggleThemeButton.textContent = 'Switch to Dark Theme';
  }
});

// Copy text to clipboard functionality
function copyText(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert(`${text} copied to clipboard!`);
  }).catch(err => {
    alert('Failed to copy text: ', err);
  });
}
