const connection = require('../../config/connection');

module.exports = (id) => connection.query('SELECT * from books where id = $1', [id]);
