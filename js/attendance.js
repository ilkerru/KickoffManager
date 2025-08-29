// js/players.js
const form = document.getElementById('playerForm');
const playerList = document.getElementById('playerList');

function renderPlayers() {
  const players = getPlayers();
  playerList.innerHTML = '';
  players.forEach((player, index) => {
    const li = document.createElement('li');
    li.textContent = player.name;
    li.innerHTML += ` <button onclick="deletePlayer(${index})">Sil</button>`;
    playerList.appendChild(li);
  });
}

function deletePlayer(index) {
  const players = getPlayers();
  players.splice(index, 1);
  savePlayers(players);
  renderPlayers();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nameInput = document.getElementById('playerName');
  const newPlayer = { name: nameInput.value.trim() };
  if (newPlayer.name) {
    const players = getPlayers();
    players.push(newPlayer);
    savePlayers(players);
    nameInput.value = '';
    renderPlayers();
  }
});

renderPlayers();
