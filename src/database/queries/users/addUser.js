const connection = require('../../config/connection');

const addUser = (userName, urlImg, email, password) => 
  connection.query(
    'INSERT INTO users (user_name, url_image, email, password) values ($1, $2, $3, $4)',
    [userName, urlImg, email, password],
);

module.exports = addUser;
