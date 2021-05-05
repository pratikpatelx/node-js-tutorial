const path = require("path");

console.log(path.sep);

//join a sequence of paths

const filePath = path.join("/content", "subcontent", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subcontent", "test.txt");
console.log(absolute);
