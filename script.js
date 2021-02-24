const days = document.getElementById('days'),
  hours = document.getElementById('hours'),
  minutes = document.getElementById('minutes'),
  seconds = document.getElementById('seconds'),
  countdown = document.getElementById('countdown');

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const currentYear = new Date().getFullYear();

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
}

updateCountdown();