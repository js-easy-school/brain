const XLSX = require('xlsx');

// Загрузка файла
const wb = XLSX.readFile('xls.xls');

// Получение листа
const wsname = wb.SheetNames[0];
const ws = wb.Sheets[wsname];

// Преобразование в объект
const data = XLSX.utils.sheet_to_json(ws);

// Конвертация в JSON
const jsonData = JSON.stringify(data);

// Сохранение в файл
const fs = require('fs');
fs.writeFileSync('данные.json', jsonData);
