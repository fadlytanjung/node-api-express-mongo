module.exports = function (app) {
  let index = require('../controllers/user');
  //test api
  app.route('/register')
    .post(index.register);

  app.route('/login')
    .post(index.login);

};
