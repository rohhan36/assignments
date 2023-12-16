const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'write.txt');
console.log(__dirname);
fs.writeFileSync(filePath, 'Hello Node.js 123');