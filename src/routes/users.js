const router = require('express').Router();
const userConroller = require("../controllers/users/index");
const homePage = require('../controllers/index');
const {userAuthenticated} = require('../middleware/index')

router.get('/homePage', userAuthenticated, homePage);
router.post('/users/SignUp', userConroller.signUp);
router.post('/users/login', userConroller.login);
router.get('/logOut',userConroller.logOut);

module.exports = router;
