const connection = require('../../config/connection');

module.exports = (id) => connection.query(
  'DELETE from books where id = $1  RETURNING *',
  [id],
);
