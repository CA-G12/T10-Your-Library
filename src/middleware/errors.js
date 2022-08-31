const { join } = require('path');
const express = require('express');

const notFound = (req, res) => {
    res.status(404).sendFile(express.static(join(__dirname, '..', '..', 'public', 'errors', '404.html')));
}

const serverError = (err, req, res, next) => {
    res.status(500).sendFile(express.static(join(__dirname, '..', '..', 'public', 'errors', '500.html')));
}

module.exports = { notFound, serverError };
