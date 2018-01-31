var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('client'));

app.get('/',function(req, res){
  res.status(200).send('Hola mundo');
});

server.listen(6677,function(){
  console.log("servidor funcionando");
});