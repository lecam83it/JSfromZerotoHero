/**
 * Callback Hell, use callback many times
 */

var fs = require('fs');

fs.readFile("./file_1.txt", {encoding :"utf8"}, function(err, song1) {
    console.log(song1);
    fs.readFile("./file_2.txt", {encoding : "utf8"} , function ( err, song2) {
        console.log(song2);
        fs.readFile("./file_3.txt", {encoding : "utf8"}, function(err, song3) {
            console.log(song3);
            
        })
        
    })
})