let startTime, elapsedTime = 0, interval;
const display = document.getElementById('display');
const lapList = document.getElementById('lap-list');

function formatTime(time) {
    let date = new Date(time);
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10);
}

function stopStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    lapList.innerHTML = '';
}

function recordLap() {
    const lapTime = document.createElement('li');
    lapTime.textContent = formatTime(elapsedTime);
    lapList.appendChild(lapTime);
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);
