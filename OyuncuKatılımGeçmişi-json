// js/history.js

function getAttendance() {
  return JSON.parse(localStorage.getItem('attendance') || '{}');
}

function populatePlayerList() {
  const players = getPlayers();
  const select = document.getElementById("playerSelect");

  players.forEach(player => {
    const option = document.createElement("option");
    option.value = player.name;
    option.textContent = player.name;
    select.appendChild(option);
  });
}

function showHistory(playerName) {
  const historyList = document.getElementById("playerHistory");
  const attendanceData = getAttendance();

  document.getElementById("playerNameTitle").textContent = `${playerName} - Katıldığı Haftalar:`;

  historyList.innerHTML = "";

  let attendedCount = 0;

  for (const [week, attendees] of Object.entries(attendanceData)) {
    if (attendees.includes(playerName)) {
      const li = document.createElement("li");
      li.textContent = week;
      historyList.appendChild(li);
      attendedCount++;
    }
  }

  const summary = document.createElement("li");
  summary.style.marginTop = "10px";
  summary.innerHTML = `<strong>Toplam Katılım: ${attendedCount} hafta</strong>`;
  historyList.appendChild(summary);
}

document.getElementById("playerSelect").addEventListener("change", function () {
  if (this.value) {
    showHistory(this.value);
  }
});

populatePlayerList();
