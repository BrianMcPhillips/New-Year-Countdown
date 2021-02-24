const days = document.getElementById('days'),
  hours = document.getElementById('hours'),
  minutes = document.getElementById('minutes'),
  seconds = document.getElementById('seconds'),
  countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const daysTime = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursTime = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesTime = Math.floor(diff / 1000 / 60) % 60;
  const secondsTime = Math.floor(diff / 1000) % 60;

  days.innerHTML = daysTime;
  hours.innerHTML = hoursTime;
  minutes.innerHTML = minutesTime;
  seconds.innerHTML = secondsTime;
}

setInterval(updateCountdown, 1000);