'use strict';

let responses = require('../responses');
let User = require('../models/user');
let bcrypt = require('bcrypt');
let jwt = require('../utils');

module.exports = {
  register: async (req, res) => {
    try {
      let data = req.body;
      data.password = bcrypt.hashSync(data.password, 10);
      let users = new User(req.body);

      const cek_username = await User.countDocuments({ username: data.username });
      const cek_email = await User.countDocuments({ email: data.email });
      if (cek_username > 0) {
        responses.error('username has been registered!', res);
      }

      if (cek_email > 0) {
        responses.error('email has been registered!', res);
      }

      const insert = await users.save();
      responses.success(insert, res);
    } catch (err) {
      responses.error(String(err), res);
    }
  },login: async (req,res) =>{
    let data = req.body;
    try {
      let user_login = await User.findOne({ username: data.username }).exec();
      if(user_login !== null){
        let jwt_data = {
          _id: user_login._id,
          fullname: user_login.fullname,
          email: user_login.email
        };
        if (bcrypt.compareSync(data.password, user_login.password)) {
          let exp = Math.floor(Date.now() / 1000) + (60 * 60);
          let jwt_result = await jwt.generate_token(jwt_data, exp, 'https://example.com');
          res.json({
            status: 'success',
            message: 'Authentication Successful!',
            token: jwt_result,
            error: null
          });
        } else {
          responses.error('password not match!', res);
        }
      }else{
        responses.error('Akun tersebut tidak terdaftar',res);
      }
    } catch (err) {
      responses.error(String(err), res);
    }
  }
};
