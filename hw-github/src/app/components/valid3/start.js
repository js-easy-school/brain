const fs = require('fs');

function saveCardsDataToFile() {
   const cardsData = JSON.parse(localStorage.getItem('cards')) || [];
   const jsonData = JSON.stringify(cardsData);
   fs.writeFileSync('start.json', jsonData);
}

