const fs = require('fs');
const { PowerShell } = require('node-powershell');

const x = 100;
const y = 250;

const psCommand = `
  Add-Type -AssemblyName System.Windows.Forms;
  [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(${x}, ${y})
`;

// создаём новый экземпляр PowerShell
const ps = new PowerShell({
    executionPolicy: 'Bypass',
    noProfile: true
});

// добавляем команду в свойство commands и выполняем её
ps.addCommand(psCommand)
    .then((output) => {
        // команда была успешно отправлена
        console.log('Команда PowerShell выполнена успешно.');
        // закрываем экземпляр PowerShell
        ps.dispose();
    })
    .catch((err) => {
        // произошла ошибка при отправке команды
        console.error(`Ошибка выполнения команды PowerShell: ${err}`);
        // закрываем экземпляр PowerShell
        ps.dispose();
    });
