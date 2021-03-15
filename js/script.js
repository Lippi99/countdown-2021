const daysLeft = document.getElementById("days-count");
const hoursLeft = document.getElementById("hours-count");
const minutesLeft = document.getElementById("minutes-count");
const secondsLeft = document.getElementById("seconds-count");

const newYears = '1 Jan 2022';

let countdown = () =>{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = formatTime(hours);
    minutesLeft.innerHTML = formatTime(minutes);
    secondsLeft.innerHTML = formatTime(seconds);
}

let formatTime = time =>{
   return time < 10? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);