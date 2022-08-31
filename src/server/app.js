const express = require('express');
const compression = require('compression');
const { join } = require('path');
const { notFound, serverError } = require('../middleware/index');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', '..', 'public')));

module.exports = app;
