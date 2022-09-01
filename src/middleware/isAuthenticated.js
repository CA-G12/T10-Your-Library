const jwt = require('jsonwebtoken');
require('dotenv').config()
const { SECRET_KEY } = process.env;

const userAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(400).send('Access Token');
  } else {
    jwt.verify(token, SECRET_KEY, (err, encoded) => {
      if (err) {
        console.log(err);
        next(err)
      } else {
        console.log(encoded);
        next();
      }
    });
  }
};

module.exports = userAuthenticated;
