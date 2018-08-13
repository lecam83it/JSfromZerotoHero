var fs = require('fs');

function readFileCallback(path, cb) {
    fs.readFile(path, { encoding: "utf8" } , function(err, result) {
        console.log(result);
        cb();
    });
}
function onDone() {
    console.log("Done");
}
readFileCallback("./file.txt", onDone)

