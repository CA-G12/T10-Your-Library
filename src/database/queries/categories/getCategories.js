const { connection } = require("../../config/connection");

const getCategoriesQuery = () => {
  const sql = "SELECT * FROM categories";
  return connection.query(sql);
};

module.exports = { getCategoriesQuery };
