//Not a part of LearnYouNode, but given to us by Lars

var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello World\n");
}).listen(5555, "127.0.0.1");

console.log("Server running at localhost, port 5555");