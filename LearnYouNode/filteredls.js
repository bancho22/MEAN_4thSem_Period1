/**
 * Created by Bancho on 04-Feb-16.
 */
/*Create a program that prints a list of files in a given directory,
    filtered by the extension of the files. You will be provided a directory
name as the first argument to your program (e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.

    For example, if you get 'txt' as the second argument then you will need to
filter the list to only files that end with .txt. Note that the second
argument will not come prefixed with a '.'.

    The list of files should be printed to the console, one file per line. You
must use asynchronous I/O.*/

//console.log("running...");

/*
var fs = require("fs");
var path = require("path");

var pathStr = process.argv[2];
var extension = process.argv[3];
var fileNames = [];

fs.readdir(pathStr, function(err, list){
    if(err){
        console.log("Sth went wrong.");
    }
    else{
        fileNames = list;
        var approvedFiles = fileNames.filter(function(entry){
            if(path.extname(entry) === "." + extension){
                return true;
            }
        });
        approvedFiles.forEach(function(entry){
            console.log(entry);
        });
    }
});*/

var mymodule = require("./mymodule");

function doStuff(err, data){
    if(err){
        console.log("Sth went wrong");
    }
    else{
        data.forEach(function(entry){
            console.log(entry);
        });
    }
};

mymodule(process.argv[2], process.argv[3], doStuff);