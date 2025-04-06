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
  // Clear previous content
  let javaPlayersSpan = document.getElementById('javaPlayers');
  javaPlayersSpan.innerHTML = "";

  // Check Java Server
  fetch("https://api.mcsrvstat.us/2/buying-hz.gl.joinmc.link")
    .then(response => response.json())
    .then(data => {
      let javaStatus = document.getElementById('javaStatus');
      let javaPlayerList = document.getElementById('javaPlayerList');

      if (data.online) {
        javaStatus.textContent = "Online";
        javaStatus.classList.add('online');
        javaStatus.classList.remove('offline');

        javaPlayerList.style.display = "block";

        if (data.players && data.players.online > 0 && data.players.list && data.players.list.length > 0) {
          data.players.list.forEach((name) => {
            let playerDiv = document.createElement('div');
            playerDiv.classList.add('player-item');

            let icon = document.createElement('img');
            icon.src = "steve-icon.png"; // Java icon
            icon.classList.add('player-icon');

            let playerName = document.createElement('span');
            playerName.textContent = `${name} (Java)`;

            playerDiv.appendChild(icon);
            playerDiv.appendChild(playerName);

            javaPlayersSpan.appendChild(playerDiv);
          });
        } else {
          let noPlayersMsg = document.createElement('div');
          noPlayersMsg.classList.add('player-item', 'no-players');
          noPlayersMsg.textContent = "No Java players online!";
          javaPlayersSpan.appendChild(noPlayersMsg);
        }
      } else {
        javaStatus.textContent = "Offline";
        javaStatus.classList.add('offline');
        javaStatus.classList.remove('online');
        javaPlayerList.style.display = "none";
      }
    });

  // Check Bedrock Server and show in same javaPlayersSpan container
  fetch("https://api.mcsrvstat.us/2/transportation-carb.gl.at.ply.gg")
    .then(response => response.json())
    .then(data => {
      let bedrockPlayersExist = false;

      if (data.online) {
        if (data.players && data.players.online > 0 && data.players.list && data.players.list.length > 0) {
          bedrockPlayersExist = true;
          data.players.list.forEach((name) => {
            let playerDiv = document.createElement('div');
            playerDiv.classList.add('player-item');

            let icon = document.createElement('img');
            icon.src = "steve-icon.png"; // Same icon or change if you want a different one
            icon.classList.add('player-icon');

            let playerName = document.createElement('span');
            playerName.textContent = `${name} (Bedrock)`;

            playerDiv.appendChild(icon);
            playerDiv.appendChild(playerName);

            javaPlayersSpan.appendChild(playerDiv);
          });
        }
      }

      // If no Bedrock players online, show a message
      if (!bedrockPlayersExist) {
        let noPlayersMsg = document.createElement('div');
        noPlayersMsg.classList.add('player-item', 'no-players');
        noPlayersMsg.textContent = "No Bedrock players online!";
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
