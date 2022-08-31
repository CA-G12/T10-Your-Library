const connection = require('../../config/connection');

// eslint-disable-next-line max-len
// attach Category(arr,id) to create sql command that add all selected categories for book in one sql command,
const attachCategory = (categories, bookId) => {
  const str = categories.reduce((acc, _v, i) => `${acc} ($1, $${i + 2}),`, '');
  return connection.query(`INSERT INTO book_category(category_id, book_id) values ${str.slice(0, str.length - 1)};`, [bookId, ...categories]);
};

// const detachCategory = (categories, bookId) => {
//   const str = categories.reduce((acc, _v, i) => `${acc} ($1, $${i + 2}),`, '');
//   return connection.query(`DELETE FROM book_category
//   ${str.slice(0, str.length - 1)};`, [bookId, ...categories]);
// };

module.exports = (title, discription, urlimage, categories) => connection.query(
  'UPDATE books SET title =$1, discription =$2, url_image=$3 RETURNING *',
  [title, discription, urlimage],
).then((book) => book.id).then((bookId) => attachCategory(categories, bookId));
