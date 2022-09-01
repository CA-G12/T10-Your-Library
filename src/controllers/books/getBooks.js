const {getBooks} = require('../../database/queries/books/index')

module.exports = (req,res,next)=>{
    getBooks()
    .then(data => {console.log(data.rows); res.json(data.rows)})
    .catch(err => next(err));
}