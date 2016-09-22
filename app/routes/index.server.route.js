module.exports = function (app) {
  var index = require('../controllers/index.server.controller');
  app.get('/',index.first);
  app.get('/data',index.datainit);
}
