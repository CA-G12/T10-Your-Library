const homePage = require('../controllers/index');
const jwt=require('jsonwebtoken')
require('dotenv').config();

const auth = (req, res, next)=>{
    const {token} = req.cookies
    jwt.verify(token ,process.env.SECRET_KEY, (err,data)=>{
      if (!err){
        req.user=data;
      }
      next();
    })
  }

router.get('/home', auth, homePage);
