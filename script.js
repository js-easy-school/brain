window.addEventListener('DOMContentLoaded', function () {
    function updateBatteryStatus() {
        navigator.getBattery().then(function (battery) {
            var timeRemaining = battery.dischargingTime;
            if (isNaN(timeRemaining) || timeRemaining === Infinity) {
                document.getElementById('timeRemaining').textContent = 'Неизвестно';
            } else {
                var hours = Math.floor(timeRemaining / 3600); // изменение здесь: деление на 3600 для получения часов
                var minutes = timeRemaining % 60;
                document.getElementById('timeRemaining').textContent = hours + ' часов ' + minutes + ' минут';
            }
        });
    }

    updateBatteryStatus();

    navigator.getBattery().then(function (battery) {
        battery.addEventListener('chargingchange', updateBatteryStatus);
        battery.addEventListener('levelchange', updateBatteryStatus);
    });
});
