const jwt = require('jsonwebtoken');
require('dotenv').config();
const loginSchema = require('../../validation/logInSchema')
const loginQuery = require('../../database/queries/users/index')
const bcrypt = require('bcryptjs');

module.exports = (req,res,next)=>{
    const {email , password} = req.body;
    const {error} = loginSchema.validate({email , password})
    
    if(error){
        res.json({ result: 'Username or Password are not correct ' });
    }else{
        loginQuery.getUserbyID(email).then(data => data.rows[0]).then(user =>{
            bcrypt.compare(password, user.password,(err,result)=>{
                if(err){
                    next(err)
                }
                if(result){
                    const payload = {email};
                    const token = jwt.sign(payload,process.env.SECRET_KEY, {algorithm:'HS256'});
                    res.cookie('token',token);
                    res.json({'message':"sucess"});
                    
                    // res.cookie('token',token).redirect('/home');
                }else{
                    res.json({msg:'password is false'})
                }
            })
        }).catch(err=> next(err))
    }
}