const middleware = require('../middleware');

module.exports = function (app) {
  let index = require('../controllers');
  //test api
  app.route('/')
    .get(index.index);

  app.route('/post')
    .post(middleware, index.addpost);

  app.route('/post')
    .get(middleware, index.getpost);

  app.route('/post/:id')
    .get(index.getonepost);

  app.route('/post/:id')
    .put(middleware, index.updatepost);

  app.route('/post/:id')
    .delete(middleware, index.deletepost);

};
