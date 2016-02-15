/**
 * Created by Bancho on 04-Feb-16.
 */
/*Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.

    The full path to the file to read will be provided as the first
command-line argument.*/

var fs = require("fs");

var path = process.argv[2];
fs.readFile(path, function(err, data){
    if(err){
        console.log("Sth went wrong.");
    }
    else{
        var lines = data.toString().split("\n").length - 1;
        console.log(lines);
    }
});
