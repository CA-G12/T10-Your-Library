const addUser = require('../../database/queries/users/addUser');
const {signUpSchema} = require('../../validation/index');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const signUp = (req, res, next)=>{
    let { name, email, password, imageUrl } = req.body;
    const {error} = signUpSchema.validate({name, email, password, imageUrl}, {abortEarly:false});
    if (error) {
      next(error);
    }
    else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) next(err);
          password = hash;

          addUser(name, imageUrl, email, password)
          .then(() => {
            const payload = { name: name, email: email}
            const token = jwt.sign(payload, process.env.SECRET_KEY, { algorithm: 'HS256'});
            res.cookie('token', token).redirect('/homePage');
          })
          .catch((err) => next(err));
        });
      })
    }
}

module.exports = signUp;