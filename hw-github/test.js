// fetch('https://api.hh.ru/vacancies/82318891')
//   .then(response => response.json())
//   .then(data => {
//     // Данные о вакансии хранятся в объекте `data`.
//     console.log(data);
//   })
//   .catch(error => console.error(error));

fetch('https://api.hh.ru/vacancies/82318891')
    .then((response) => response.json())
    .then((data) => {
        // Данные о вакансии хранятся в объекте `data`.
        console.log(data)
        const fs = require('fs')
        fs.writeFile('auto.json', JSON.stringify(data), (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log('JSON успешно сохранен в файле auto.json')
        })
    })
    .catch((error) => console.error(error))
