// js/attendance.js

function getCurrentWeekKey() {
  const now = new Date();
  const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
  return monday.toISOString().split('T')[0]; // YYYY-MM-DD
}

function getAttendance() {
  return JSON.parse(localStorage.getItem('attendance') || '{}');
}

function saveAttendance(data) {
  localStorage.setItem('attendance', JSON.stringify(data));
}

function renderForm() {
  const players = getPlayers();
  const weekKey = getCurrentWeekKey();
  document.getElementById("weekDisplay").textContent = weekKey;

  const form = document.getElementById("attendanceForm");
  form.innerHTML = "";

  players.forEach(player => {
    const div = document.createElement("div");

    div.innerHTML = `
      <label>
        <input type="checkbox" name="player" value="${player.name}" />
        ${player.name}
      </label>
    `;
    form.appendChild(div);
  });
}

document.getElementById("saveAttendance").addEventListener("click", () => {
  const checkedBoxes = document.querySelectorAll('input[name="player"]:checked');
  const attendingPlayers = Array.from(checkedBoxes).map(cb => cb.value);
  const weekKey = getCurrentWeekKey();
  const allAttendance = getAttendance();

  allAttendance[weekKey] = attendingPlayers;
  saveAttendance(allAttendance);

  alert("Katılım bilgisi kaydedildi!");
});

renderForm();
