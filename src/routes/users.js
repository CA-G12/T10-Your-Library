const router = require('express').Router();
const signUp = require("../controllers/users/index");

router.post('/users/SignUp', signUp);

module.exports = router;