var timers = document.getElementById("timers");
var addTimer = document.getElementById("addTimer");
// var alarmSound = document.getElementById("alarmSound");
var alarmSound = new Audio("C:/Windows/Media/Alarm01.wav");

addTimer.addEventListener("click", function(event) {
    event.preventDefault(); // prevent page refresh
    var now = new Date();
    var timerId = now.getTime().toString();
    var timer = document.createElement("fieldset");
    timer.id = timerId;
    timer.innerHTML = '<legend>Timer ' + timerId + '</legend>'
        + '<button class="deleteTimer" data-timer-id="' + timerId + '">Delete timer</button>'
        + '<label for="' + timerId + '-duration">Number of minutes:</label>'
        + '<input type="number" id="' + timerId + '-duration">'
        + '<label for="' + timerId + '-start">Start time:</label>'
        + '<input type="time" id="' + timerId + '-start" disabled>'
        + '<label for="' + timerId + '-end">End time:</label>'
        + '<input type="time" id="' + timerId + '-end" disabled>'
        + '<label for="' + timerId + '-countdown">Countdown:</label>'
        + '<input type="text" id="' + timerId + '-countdown" value="0:00" disabled>';
    timers.insertBefore(timer, addTimer);
    var duration = document.getElementById(timerId + "-duration");
    var start = document.getElementById(timerId + "-start");
    var end = document.getElementById(timerId + "-end");
    var countdown = document.getElementById(timerId + "-countdown");
    var intervalId;
    duration.addEventListener("input", function() {
        var minutes = parseInt(duration.value, 10);
        clearTimeout(intervalId); // clear timeout on input change
        if (!isNaN(minutes) && minutes > 0) {
            start.value = formatTime(now);
            var endDatetime = new Date(now.getTime() + minutes * 60000);
            end.value = formatTime(endDatetime);
            countdown.value = formatCountdown(minutes * 60);
            intervalId = setTimeout(function countdownFunction() {
                var remaining = getRemainingSeconds(endDatetime);
                if (remaining <= 0) {
                    countdown.value = "0:00";
                    alarmSound.play();
                    timer.style.backgroundColor = "#ff0000";
                } else {
                    countdown.value = formatCountdown(remaining);
                    intervalId = setTimeout(countdownFunction, 1000); // update countdown every second
                }
            }, 1000); // start countdown after 1 second
        } else {
            start.value = "";
            end.value = "";
            countdown.value = "0:00";
        }
    });
});

function formatTime(date) {
    var hours = padZeroes(date.getHours());
    var minutes = padZeroes(date.getMinutes());
    return hours + ":" + minutes;
}

function padZeroes(number) {
    return (number < 10 ? "0" : "") + number.toString();
}

function getRemainingSeconds(endDatetime) {
    var now = new Date();
    var remaining = Math.floor((endDatetime - now) / 1000);
    return remaining;
}

function formatCountdown(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + ":" + padZeroes(remainingSeconds);
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteTimer")) {
        var timerId = event.target.getAttribute("data-timer-id");
        var timer = document.getElementById(timerId);
        clearTimeout(timer.intervalId); // clear timeout on timer delete
        timer.remove();
    }
});

