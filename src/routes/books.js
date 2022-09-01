const bookController = require('../controllers/books/index')
const router = require('express').Router();
const {userAuthenticated} = require('../middleware/index')

router.get('/books', userAuthenticated, bookController.getBooks);

module.exports = router;
