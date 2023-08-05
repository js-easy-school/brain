// fetch(
//   "https://spb.hh.ru/search/vacancy?text=React+js&salary=120000&area=2&ored_clusters=true&only_with_salary=true"
// )
//   .then((response) => response.text())
//   .then((html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     const countEl = doc.querySelector(".bloko-gap_top .bloko-header-2");
//     const count = Number(countEl.textContent.match(/\d+/)?.[0]);
//     console.log(`Количество карточек товара: ${count}`);
//   })
//   .catch((error) => console.error(error));

// const fetch = require('node-fetch')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

// fetch(
//     'https://spb.hh.ru/search/vacancy?text=React+js&salary=120000&area=2&ored_clusters=true&only_with_salary=true'
// )
//     .then((response) => response.text())
//     .then((html) => {
//         const { document } = new JSDOM(html).window
//         const countEl = document.querySelector('.bloko-gap_top .bloko-header-2')
//         const count = Number(countEl.textContent.match(/\d+/)?.[0])
//         console.log(`Количество карточек товара: ${count}`)
//     })
//     .catch((error) => console.error(error))

// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://spb.hh.ru/search/vacancy?text=React+js&salary=120000&area=2&ored_clusters=true&only_with_salary=true');
//   const html = await response.text();
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const countEl = doc.querySelector('.bloko-gap_top .bloko-header-2');
//   const count = Number(countEl.textContent.match(/\d+/)?.[0]);
//   console.log(`Количество карточек товара: ${count}`);
// })();

// const fetch = require('node-fetch');

// fetch('https://spb.hh.ru/search/vacancy?text=React+js&salary=120000&area=2&ored_clusters=true&only_with_salary=true')
//   .then(response => response.text())
//   .then(html => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const countEl = doc.querySelector('.bloko-gap_top .bloko-header-2');
//     const count = Number(countEl.textContent.match(/\d+/)?.[0]);
//     console.log(`Количество карточек товара: ${count}`);
//   })
//   .catch(error => console.error(error));

// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://spb.hh.ru/search/vacancy?text=React+js&salary=120000&area=2&ored_clusters=true&only_with_salary=true');
//   const html = await response.text();
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const countEl = doc.querySelector('.bloko-gap_top .bloko-header-2');
//   const count = Number(countEl.textContent.match(/\d+/)?.[0]);
//   console.log(`Количество карточек товара: ${count}`);
// })();

// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// fetch('https://spb.hh.ru/search/vacancy?text=React+js&salary=120000&area=2&ored_clusters=true&only_with_salary=true')
//   .then(response => response.text())
//   .then(html => {
//     const { document } = new JSDOM(html).window;
//     const countEl = document.querySelector('.bloko-gap_top .bloko-header-2');
//     const count = countEl ? Number(countEl.textContent.match(/\d+/)?.[0]) : 0;
//     console.log(`Количество карточек товара: ${count}`);
//   })
//   .catch(error => console.error(error));

// const fetch = require('node-fetch')

// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// const url = 'https://spb.hh.ru/search/vacancy?area=2&search_field=name&search_field=company_name&search_field=description&enable_snippets=false&salary=120000&text=React+js&ored_clusters=true';

// fetch(url)
//   .then(response => response.text())
//   .then(html => {
//     const { window } = new JSDOM(html);
//     const document = window.document;

//     const countEl = document.querySelector('.vacancy-serp span');
//     const countText = countEl ? countEl.textContent.trim() : '';
//     const count = Number(countText.replace(/\s+/g, ''));

//     console.log(`Найдено ${count} вакансий по запросу React js на сайте hh.ru`);
//   })
//   .catch(error => console.log(error));

const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = 'https://spb.hh.ru/search/vacancy?area=2&search_field=name&search_field=company_name&search_field=description&enable_snippets=false&salary=120000&text=React+js&ored_clusters=true';

https.get(url, response => {
  let data = '';
  response.on('data', chunk => {
    data += chunk;
  });
  response.on('end', () => {
    const dom = new JSDOM(data);
    const { document } = dom.window;

    const countEl = document.querySelector('.vacancy-serp span');
    const countText = countEl ? countEl.textContent.trim() : '';
    const count = Number(countText.replace(/\s+/g, ''));

    console.log(`Найдено ${count} вакансий по запросу React js на сайте hh.ru`);
  });
}).on('error', error => {
  console.error(error);
});


