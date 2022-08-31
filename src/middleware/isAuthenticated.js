const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const userAuthenticated = (req, res, next) => {
  const { token } = req.cookies.token;
  if (!token) {
    res.status(400).send('Access Denied');
  } else {
    jwt.verify(token, SECRET_KEY, (err, encoded) => {
      if (!err) {
        res.status(400).send('Invalid Token');
      } else {
        res.cookie('token', encoded);
        next();
      }
    });
  }
};

module.exports = userAuthenticated;
