const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourEl.innerText = hours;
  minEl.innerText = minutes;
  secEl.innerText = seconds;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
