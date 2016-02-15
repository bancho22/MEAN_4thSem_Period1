/**
 * Created by Bancho on 11-Feb-16.
 */
/*
Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Write the String contents of each
"data" event from the response to a new line on the console (stdout).*/

var http = require("http");

http.get(process.argv[2], function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        console.log(data);
    });
}).on("error", function(e){
    console.log(e.toString());
});
