const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hello World');
});

// Basic Routes
app.get('/monkeys', function(req,res){
    res.send('We really like monkeys');
});

// Basic Post Route
app.post('/monkeys', function(req,res){
    res.send("You cannot post stuff yet");
})

// Wildcard Routes
app.get('/monkeys/*', function(req,res){
    res.send('Not your mothers monkey');
});

// Deep Routes
app.get('/hello/world/2', function(req,res){
    res.send("Another hello world example");
});

app.listen(3000, function(){
    console.log("Starting Express on port 3000");
});