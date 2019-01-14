const express = require('express');
const app = express();
const port = '3000';

app.get('/', function(req,res){
  res.send("Welcome to my webpage!");
});

app.get('/helloworld', function(req,res){
  res.send("<html><h1>Hello World</h1></html>");
});

app.put('/', function(req,res){
  res.send("<h1>You Put something here</h1>");
})

app.get('/quote', function(req,res){
  res.json({quote: "The early bird catches the worm."});
})

app.use(express.static('public'));

app.listen(port, function(){
  console.log("Express running on port " + port);
});