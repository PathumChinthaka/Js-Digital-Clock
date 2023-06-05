
const hoursEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const amPmEl = document.getElementById("ampm");

function updateClock() {

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "Am";

    if (hours > 12) {
        hours = hours - 12;
        ampm = "Pm";
    }

    hours = hours < 10 ? "0" + hours : hours;

    hoursEl.innerText = hours;
    minuteEl.innerText = minutes;
    secondsEl.innerText = seconds;
    amPmEl.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();