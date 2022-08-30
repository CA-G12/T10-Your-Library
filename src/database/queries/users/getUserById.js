const connection = require('../../config/connection');

const getUserbyID = (userId) => connection.query('SELECT user_name, url_image FROM users WHERE id= $1', [userId]);

module.exports = getUserbyID;
