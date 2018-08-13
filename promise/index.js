//Promise
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: "utf8" }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function onDone(data) {
    console.log(data);

}
function onError(err) {
    console.log(err);

}

// readFilePromise("./file_1.txt").then(onDone).then(function () {
//     return readFilePromise("./file_2.txt");
// }).then(onDone).catch(onError);


var promise_fs = require("promise-fs");

promise_fs.readFile("./file_1.txt", { encoding: "utf8" }).then(onDone).then(function () {
    return promise_fs.readFile("./file_2.txt", { encoding: "utf8" })
}).then(onDone).catch(onError);