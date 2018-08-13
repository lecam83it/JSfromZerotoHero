var fs = require('fs');
// Sync function
console.log("Start");
var file_1 = fs.readFileSync("./file1.txt", {encoding : "UTF8"});
console.log(file_1);

var file_2 = fs.readFileSync("./file2.txt", {encoding : "UTF8"});
console.log(file_2);

console.log("End");

// Async function

console.log("Start");
fs.readFile("./file1.txt", {encoding : "UTF8"}, function (err, result) {
    console.log(result);
});
console.log("End");


