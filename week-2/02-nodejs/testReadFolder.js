const fs = require("fs");
const path = require("path");
const folderPath = path.join(__dirname, "files");

console.log(folderPath);
const files = fs.readdirSync(folderPath);

console.log(files);
