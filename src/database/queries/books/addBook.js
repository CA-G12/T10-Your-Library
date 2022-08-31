const connection = require('../../config/connection');

// eslint-disable-next-line max-len
// attach Category(arr,id) to create sql command that add all selected categories for book in one sql command,
const attachCategory = (categories, bookId) => {
  const str = categories.reduce((acc, _v, i) => `${acc} ($1, $${i + 2}),`, '');
  return connection.query(`INSERT INTO book_category(category_id, book_id) values ${str.slice(0, str.length - 1)};`, [bookId, ...categories]);
};

module.exports = (title, discription, urlimage, userid, categories) => connection.query(
  'INSERT INTO books(title, discription, url_image, user_id) values($1,$2,$3,$4) RETURNING *',
  [title, discription, urlimage, userid],
).then((book) => book.id).then((bookId) => attachCategory(categories, bookId));
