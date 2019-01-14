var express = require('express');
var app = express();

app.get('/hello', function(req,res){
	res.send("<html><h1>Hello World</h1></html>");
});

app.listen('3000', function(){
	console.log("Express running on port 3000");
});
