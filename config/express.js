var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function (app) {

  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  }else{
    app.use(compression());
  }
  app.use(bodyParser.urlencoded({
    extended : true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static('public'));
  //call model file
  require('../app/models/article.server.model')(app);
  //call routing file
  require('../app/routes/index.server.route')(app);

  return app;
}
