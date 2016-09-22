var Sequelize = require('sequelize');
var connection = require('../../config/database');

module.exports = function (app) {

  var Article = connection.define('article',{
    title: {
      type:Sequelize.STRING,
      unique : true,
      allowNull : false
    },
    body: {
      type:Sequelize.TEXT,
      //defaultValue : '';
    }

  },{
    timestamps : false
  });

  console.log('eiei');

  // for test initialize database
  connection.sync({
    force: true,
    logging: console.log
  }).then(function () {
    Article.create({
      title:'Test title 2',
      body: 'Lorem ipsum eiei sit amet, consectetur adipiscing elit. Nullam posuere' +
      'dui est, in auctor nunc hendrerit quis. Curabitur' +
      'imperdiet orci sed ipsum vestibulum vulputate. Pellentesque condimentum' +
      'justo nec mollis'
    });
  });

  return app;
}
