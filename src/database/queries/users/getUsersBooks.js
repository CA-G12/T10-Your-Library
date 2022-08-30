const connection = require('../../config/connection');

const getUsersBooks = (userId) => connection.require(
  'SELECT books.title, books.discription, books.url_image, users.user_name FROM books JOIN users ON books.user_id = users.id WHERE books.user_id = $1',
  [userId]
);

module.exports = getUsersBooks;
