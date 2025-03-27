let codespaceName = "friendly-giggle-5g5xx6x66gj7fp47q";
let updateInterval;

function updateLinks() {
  document.getElementById('startServer').onclick = () => window.open(`https://${codespaceName}.github.dev/?autoStart=false`, '_blank');
  // Check if optional elements exist before setting their events or text
  if (document.getElementById('craftyPanel')) {
    document.getElementById('craftyPanel').onclick = () => window.open(`https://${codespaceName}-8443.app.github.dev`, '_blank');
  }
  if (document.getElementById('javaIP')) {
    document.getElementById('javaIP').textContent = "buying-hz.gl.joinmc.link";
  }
  if (document.getElementById('bedrockIP')) {
    document.getElementById('bedrockIP').textContent = "transportation-carb.gl.at.ply.gg";
  }
  if (document.getElementById('bedrockPort')) {
    document.getElementById('bedrockPort').textContent = "1398";
  }
}

function checkServerStatus() {
  fetch("https://api.mcsrvstat.us/2/buying-hz.gl.joinmc.link")
    .then(response => response.json())
    .then(data => {
      let javaStatus = document.getElementById('javaStatus');
      let javaPlayerList = document.getElementById('javaPlayerList');
      let javaPlayersSpan = document.getElementById('javaPlayers');

      if (data.online) {
        javaStatus.textContent = "Online";
        javaStatus.classList.add('online');
        javaStatus.classList.remove('offline');

        // Clear any previous content
        javaPlayersSpan.innerHTML = "";

        if (data.players && data.players.online > 0 && data.players.list && data.players.list.length > 0) {
          javaPlayerList.style.display = "block";
          data.players.list.forEach((name) => {
            let playerDiv = document.createElement('div');
            playerDiv.classList.add('player-item');

            let icon = document.createElement('img');
            icon.src = "steve-icon.png"; // Ensure the icon image is available at this path
            icon.classList.add('player-icon');

            let playerName = document.createElement('span');
            playerName.textContent = name;

            playerDiv.appendChild(icon);
            playerDiv.appendChild(playerName);

            javaPlayersSpan.appendChild(playerDiv);
          });
        } else {
          javaPlayerList.style.display = "block";
          let noPlayersMsg = document.createElement('div');
          noPlayersMsg.classList.add('player-item', 'no-players');
          noPlayersMsg.textContent = "No players online!";
          javaPlayersSpan.appendChild(noPlayersMsg);
        }
      } else {
        javaStatus.textContent = "Offline";
        javaStatus.classList.add('offline');
        javaStatus.classList.remove('online');
        javaPlayerList.style.display = "none";
      }
    });
}

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
        document.getElementById("githubUser").textContent = "aryaveer2023singh@gmail.com";
        document.getElementById("githubPass").textContent = "xh6fknwj0f@";
        document.getElementById("craftyUser").textContent = "guest";
        document.getElementById("craftyPass").textContent = "CraftyGuest";
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
