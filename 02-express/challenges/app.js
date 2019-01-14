var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
	res.send("I'm Alive");
});

app.get('/hello', function(req,res){
	res.send("<html><h1>Hello World</h1></html>");
});

app.get('/goodbye', function(req,res){
	res.send("<html><h1>Goodbye</h1></html>");
});

app.get('/messages/new', function(req,res){
	res.send("You have 5 new messages");
});

app.get('/messages/old', function(req,res){
	res.send("You have 1 old messages");
});

app.get('/messages/*', function(req,res){
	res.send("You must specify type of message.");
});

app.listen(port, function(){
	console.log("Express running on port " + port);
});
