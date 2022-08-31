const connection = require('../../config/connection');

const getUserbyID = (email) => connection.query('SELECT email, password FROM users WHERE email= $1', [email]);

module.exports = getUserbyID;
