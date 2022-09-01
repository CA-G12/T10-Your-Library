const cookieParser = require('cookie-parser');

const logOut = (req, res) => {
    res.clearCookie('token').redirect('/');
}

module.exports = logOut;
