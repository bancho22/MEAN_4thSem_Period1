/**
 * Created by Bancho on 08-Feb-16.
 */

module.exports = fileChecker;

var fs = require("fs");
var path = require("path");

function fileChecker(directory, extension, callback){
    fs.readdir(directory, function(err, data){
        if(err){
            return callback(err);
        }
        var approvedFiles = data.filter(function(file){
            if(path.extname(file) === "." + extension){
                return true;
            }
        });
        callback(null, approvedFiles);
    });
};