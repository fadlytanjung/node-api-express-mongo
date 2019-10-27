const jwt = require('jsonwebtoken');

module.exports = {
  generate_token: async (data, exp, iss=null) =>{
    return jwt.sign({
      iss: iss,
      exp: exp,
      data: data
    }, process.env.SECRET_KEY, { algorithm: process.env.JWT_ALGORITHM });
  }
};
