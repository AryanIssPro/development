let codespaceName = "potential-guide-979p7qqggwp9h9x6g";
let updateInterval;
let mapLoaded = false;

function updateLinks() {
    document.getElementById('startServer').onclick = () => window.open(`https://${codespaceName}.github.dev`, '_blank');
    document.getElementById('craftyPanel').onclick = () => window.open(`https://${codespaceName}-8443.app.github.dev`, '_blank');
    document.getElementById('javaIP').textContent = "limited-grave.gl.joinmc.link";
    document.getElementById('bedrockIP').textContent = "door-ranks.gl.at.ply.gg";
    document.getElementById('bedrockPort').textContent = "2347";
    document.getElementById('mapLink').onclick = () => window.open("http://job-cohen.gl.at.ply.gg:3790/", '_blank');
}

function checkServerStatus() {
    fetch("https://api.mcsrvstat.us/2/limited-grave.gl.joinmc.link")
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
                    // Loop through each player name and create an element with a numbered icon and name
                    data.players.list.forEach((name, index) => {
                        let playerDiv = document.createElement('div');
                        playerDiv.classList.add('player-item');
            
                        // Create an image element for the Steve icon
                        let icon = document.createElement('img');
                        icon.src = "steve-icon.png"; // Ensure the icon image is available at this path
                        icon.alt = "Steve Icon";
                        icon.classList.add('player-icon');
            
                        // Create a span for the player's name with numbering
                        let playerName = document.createElement('span');
                        playerName.textContent = `${name}`;
            
                        // Append the icon and name to the playerDiv
                        playerDiv.appendChild(icon);
                        playerDiv.appendChild(playerName);
            
                        // Append the playerDiv to the container span
                        javaPlayersSpan.appendChild(playerDiv);
                    });
                } else {
                    // No players online: display a message
                    javaPlayerList.style.display = "block";
                    let noPlayersMsg = document.createElement('div');
                    noPlayersMsg.classList.add('player-item');
                    noPlayersMsg.textContent = "No players online!";
                    // Apply bold and red color styling inline:
                    noPlayersMsg.style.fontWeight = "bold";
                    noPlayersMsg.style.color = "red";
                    noPlayersMsg.style.textAlign = "center"
                    javaPlayersSpan.appendChild(noPlayersMsg);
                }
            } else {
                javaStatus.textContent = "Offline";
                javaStatus.classList.add('offline');
                javaStatus.classList.remove('online');
                javaPlayerList.style.display = "none";
            }            
        });

    fetch("https://api.mcsrvstat.us/bedrock/2/door-ranks.gl.at.ply.gg:2347")
        .then(response => response.json())
        .then(data => {
            let bedrockStatus = document.getElementById('bedrockStatus');
            let bedrockPlayerList = document.getElementById('bedrockPlayerList');
            let bedrockPlayersSpan = document.getElementById('bedrockPlayers');

            if (data.online) {
                bedrockStatus.textContent = "Online";
                bedrockStatus.classList.add('online');
                bedrockStatus.classList.remove('offline');

                if (data.players && data.players.online > 0) {
                    bedrockPlayerList.style.display = "block";
                    bedrockPlayersSpan.textContent = data.players.list ? data.players.list.join(", ") : "Unknown Players";
                } else {
                    bedrockPlayerList.style.display = "none";
                }
            } else {
                bedrockStatus.textContent = "Offline";
                bedrockStatus.classList.add('offline');
                bedrockStatus.classList.remove('online');
                bedrockPlayerList.style.display = "none";
            }
        });
}

function checkMapStatus() {
    let mapContainer = document.getElementById("mapContainer");
    let mapStatus = document.getElementById("mapStatus");
    let mapFrame = document.getElementById("mapFrame");
    let toggleMap = document.getElementById("toggleMap");
    let mapLink = document.getElementById("mapLink");

    fetch("http://job-cohen.gl.at.ply.gg:3790/up.php", { mode: 'no-cors' })
        .then(() => {
            if (!mapLoaded) {
                mapFrame.src = "http://job-cohen.gl.at.ply.gg:3790/";
                mapLoaded = true;
            }

            mapStatus.textContent = "Online";
            mapStatus.classList.add("online");
            mapStatus.classList.remove("offline");

            mapContainer.style.display = "block";
            toggleMap.style.display = "block";
        })
        .catch(() => {
            mapStatus.textContent = "Offline";
            mapStatus.classList.add("offline");
            mapStatus.classList.remove("online");

            mapContainer.style.display = "none";
            mapLoaded = false;
        });
}

function startUpdatingStatus() {
    function update() {
        checkServerStatus();
        checkMapStatus();
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
    let credentialsVisible = false;
    let credsButton = document.getElementById("toggleCredentials");

    credsButton.addEventListener("click", function () {
        credentialsVisible = !credentialsVisible;
        document.getElementById("credentials").style.display = credentialsVisible ? "block" : "none";
        credsButton.textContent = credentialsVisible ? "Hide Credentials" : "Show Credentials";

        if (credentialsVisible) {
            document.getElementById("githubUser").textContent = "aryan0106gupta@gmail.com";
            document.getElementById("githubPass").textContent = "xh6fknwj0f@";
            document.getElementById("craftyUser").textContent = "guest";
            document.getElementById("craftyPass").textContent = "CraftyGuest";
        }
    });

    let mapVisible = false;
    let mapButton = document.getElementById("toggleMap");

    mapButton.addEventListener("click", function () {
        let mapFrame = document.getElementById("mapFrame");
        let mapLink = document.getElementById("mapLink");

        mapVisible = !mapVisible;

        mapFrame.style.display = mapVisible ? "block" : "none";
        mapLink.style.display = mapVisible ? "block" : "none";
        mapButton.textContent = mapVisible ? "Hide Map" : "Show Map";
    });

    updateLinks();
    startUpdatingStatus();
});
