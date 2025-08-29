// js/teams.js

function getCurrentWeekKey() {
  const now = new Date();
  const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
  return monday.toISOString().split('T')[0];
}

function getAttendance() {
  return JSON.parse(localStorage.getItem('attendance') || '{}');
}

function getTeamAssignments() {
  return JSON.parse(localStorage.getItem('teamAssignments') || '{}');
}

function saveTeamAssignments(assignments) {
  localStorage.setItem('teamAssignments', JSON.stringify(assignments));
}

function renderForm() {
  const form = document.getElementById("teamForm");
  const weekKey = getCurrentWeekKey();
  const attendance = getAttendance()[weekKey] || [];
  document.getElementById("weekDisplay").textContent = weekKey;

  form.innerHTML = "";
  attendance.forEach(player => {
    const div = document.createElement("div");

    div.innerHTML = `
      <label>${player}</label>
      <select name="${player}">
        <option value="A">Takım A</option>
        <option value="B">Takım B</option>
        <option value="Sub">Yedek</option>
      </select>
    `;
    form.appendChild(div);
  });
}

function saveTeams() {
  const weekKey = getCurrentWeekKey();
  const form = document.getElementById("teamForm");
  const selects = form.querySelectorAll("select");

  const teamA = [];
  const teamB = [];
  const subs = [];

  selects.forEach(select => {
    const player = select.name;
    const value = select.value;
    if (value === "A") teamA.push(player);
    else if (value === "B") teamB.push(player);
    else subs.push(player);
  });

  const allAssignments = getTeamAssignments();
  allAssignments[weekKey] = { teamA, teamB, subs };
  saveTeamAssignments(allAssignments);

  alert("Takımlar kaydedildi!");
  displayTeams();
}

function displayTeams() {
  const weekKey = getCurrentWeekKey();
  const teams = getTeamAssignments()[weekKey];

  if (!teams) return;

  document.getElementById("teamADisplay").innerHTML = teams.teamA.map(p => `<li>${p}</li>`).join("");
  document.getElementById("teamBDisplay").innerHTML = teams.teamB.map(p => `<li>${p}</li>`).join("");
  document.getElementById("subsDisplay").innerHTML = teams.subs.map(p => `<li>${p}</li>`).join("");
}

document.getElementById("saveTeams").addEventListener("click", saveTeams);

renderForm();
displayTeams();
