const fs = require('fs');
const path = require('path');

const fileToClean = path.join(__dirname, 'cleanMe.txt');

const fileContents = fs.readFileSync(fileToClean, 'utf-8');

const cleanContent = fileContents.replace(/\s+/g , " ");

fs.writeFileSync(fileToClean, cleanContent);