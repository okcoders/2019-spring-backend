var express = require('express');
var app = express();
var port = 3000;

app.get('/hello', function(req,res){
	res.send("<html><h1>Goodbye World</h1></html>");
});

app.put('/goodbye', function(req,res){
	res.send("<html><h1>Goodbye</h1></html>");
});

app.get('/messages/*', function(req,res){
	res.send("You have 10 messages");
});

app.get('/messages/new', function(req,res){
	res.send("You have 5 new messages");
});

app.listen('8000', function(){
	console.log("Express running on port 3000");
});
