var express = require('express');
var app = express();
var port = 3000;

app.get('/hello', function(req,res){
	res.send("<html><h1>Hello World</h1></html>");
});

app.put('/goodbye', function(req,res){
	res.send("<html><h1>Goodbye</h1></html>");
});

app.listen('8000', function(){
	console.log("Express running on port 3000");
});
