const path  = require('path');

const notFound = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '404.html'));
}

const serverError = (err, req, res, next) => {
    res.status(500).send(path.join(__dirname, '..', '..', 'public', 'errors', '500.html'));
}

module.exports = { notFound, serverError };
