window.addEventListener('DOMContentLoaded', function () {
    var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

    function updateBatteryStatus() {
        var timeRemaining = battery.dischargingTime;
        if (isNaN(timeRemaining) || timeRemaining === Infinity) {
            document.getElementById('timeRemaining').textContent = 'Неизвестно';
        } else {
            var hours = Math.floor(timeRemaining / 60);
            var minutes = timeRemaining % 60;
            document.getElementById('timeRemaining').textContent = hours + ' часов ' + minutes + ' минут';
        }
    }

    updateBatteryStatus();

    battery.addEventListener('chargingchange', updateBatteryStatus);
    battery.addEventListener('levelchange', updateBatteryStatus);
});
