const { connection } = require("../../config/connection");

const getCategoriesByIdQuery = (id) => {
    const sql = {
      text: "SELECT * FROM categories WHERE id = $1",
      values: id,
    };
    return connection.query(sql);
  };

module.exports = { getCategoriesByIdQuery };
