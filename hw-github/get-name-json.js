// const fs = require('fs')

// fs.readFile('данные.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     const parsedData = JSON.parse(data)
//     const name = parsedData.name
//     console.log(`Имя вакансии: ${name}`) // Выводим имя в консоль на русском языке
// })

// const fs = require('fs'); // подключение модуля для работы с файловой системой

// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
  
//   const arr = JSON.parse(data); // преобразуем данные в JavaScript-объект
  
//   // перебираем все объекты в массиве и выводим значения свойства "bild" в консоль
//   arr.forEach(obj => {
//     console.log(obj.bild);
//   });
// });

// const fs = require('fs'); // подключение модуля для работы с файловой системой

// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
  
//   const arr = JSON.parse(data); // преобразуем данные в JavaScript-объект
  
//   let count = 0; // переменная для отслеживания количества объектов
  
//   // переберём все объекты в массиве
//   const enter = '330'
//   arr.forEach(obj => {
    
//     // проверим, существует ли свойство "bild" и содержит ли оно число 330
//     if (obj.bild && obj.bild.includes(enter)) {
//       count++; // увеличим счётчик объектов, удовлетворяющих условию
//     }
//   });  

//   console.log(`Количество объектов, в которых свойство "bild" содержит число ${enter}: ${count}`);
// });

// const fs = require('fs'); // подключение модуля для работы с файловой системой

// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
  
//   const arr = JSON.parse(data); // преобразуем данные в JavaScript-объект
  
//   let count = 0; // переменная для отслеживания количества объектов
//   const count2 = '750'
//   // перебираем все объекты в массиве
//   arr.forEach(obj => {
//     if (obj.этап === "Разборка" && obj.bild && obj.bild.includes(count2)) {
//       count++; // увеличим счётчик объектов, удовлетворяющих условию
//     }
//   });  

//   console.log(`Количество объектов, в которых свойство "bild" содержит число ${count2} и свойство "этап" равно "Разборка": ${count}`);
// });

const fs = require('fs'); // подключение модуля для работы с файловой системой

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const arr = JSON.parse(data); // преобразуем данные в JavaScript-объект
  
  let count = 0; // переменная для отслеживания количества объектов
  // перебираем все объекты в массиве
  arr.forEach(obj => {
    if (obj.этап === "Разборка" && obj.bild) {
      count++; // увеличим счётчик объектов, удовлетворяющих условию
    }
  });  

  console.log(`Количество объектов, в которых свойство "bild" содержит число ${count} и свойство "этап" равно "Разборка": ${count}`);
});

