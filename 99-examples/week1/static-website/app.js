var express = require('express');
var app = express();
var http = require('http');


app.use(express.static('public'));
app.set('port', '3000');
var server = http.createServer(app);
server.listen('3000');

