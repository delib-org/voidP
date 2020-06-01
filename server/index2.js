const fs = require('fs');

let obj = {a:3}
fs.writeFileSync('./data.json', JSON.stringify(obj) , 'utf-8'); 