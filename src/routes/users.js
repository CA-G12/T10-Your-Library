const router = require('express').Router();
const userConroller = require("../controllers/users/index");

router.post('/users/SignUp', userConroller.signUp);
router.post('/users/login', userConroller.login);

module.exports = router;