var express = require('express');
var app = express();

//config envirom=nment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//load database config first
require('./config/express')(app);

app.listen(3000);
console.log("Server is listening at port 3000 ^_^");
