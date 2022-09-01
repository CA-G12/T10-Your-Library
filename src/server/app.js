const express = require('express');
const compression = require('compression');
const { join } = require('path');
const userRouter = require('../routes/users');
const bookRouter = require('../routes/books');
const { notFound, serverError } = require('../middleware/index');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cookieParser())
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', '..', 'public')));
app.use(userRouter);
app.use(bookRouter);
app.use(notFound);
app.use(serverError);

module.exports = app;