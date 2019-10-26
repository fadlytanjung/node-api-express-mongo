
module.exports = function (app) {
  let index = require('../controllers');
  //test api
  app.route('/')
    .get(index.index);

  app.route('/post')
    .get(index.getpost);

  app.route('/post')
    .post(index.addpost);

};
