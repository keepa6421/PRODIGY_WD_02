let timerDisplay = document.querySelector('.timerDisplay');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let lap = document.getElementById('lap');

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;

start.addEventListener('click', function () {
    if (timerId === null) {
        // Start the stopwatch
        timerId = setInterval(startTimer, 10);
    } else {
        // Stop the stopwatch
        clearInterval(timerId);
        timerId = null;
    }
});

reset.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = '00:00:00';
    msec = sec = min = 0;
});

lap.addEventListener('click', function () {
    // Record lap time
    let lapTime = timerDisplay.innerHTML;
    let lapItem = document.createElement('p');
    lapItem.textContent = `Lap: ${lapTime}`;
    document.body.appendChild(lapItem);
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    // Update the timer display
    timerDisplay.innerHTML = `${minString}:${secString}:${msecString}`;
}