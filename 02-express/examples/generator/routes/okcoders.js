var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('okcoders', { title: 'OKCODER 2019', content: "Welcome to OKCODERS!!" });
});

router.get('/instructors', function(req,res){
  res.json({instructors: ['Zack', 'Carson', 'Bob', 'Trae']});
});

module.exports = router;