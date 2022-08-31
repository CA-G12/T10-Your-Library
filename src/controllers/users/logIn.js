const jwt = require('jsonwebtoken');
require('dotenv').config();
const loginSchema = require('../../validation/logInSchema')
const loginQuery = require('../../database/queries/users/index')
const bcrypt = require('bcryptjs');

module.exports = (req,res,next)=>{
    console.log(req.body);
    const {email , password} = req.body;
    const {error} = loginSchema.validate({email , password})
    
    if(error){
        console.log(error);
        next(error)
    }else{
        loginQuery.getUserbyID(email).then(data => data.rows[0]).then(user =>{
            console.log(user);
            bcrypt.compare(password, user.password,(err,result)=>{
                console.log({result});
                if(err){
                    next(err)
                }
                if(result){
                    console.log({result});
                    const payload = {email};
                    const token = jwt.sign(payload,process.env.SECRET_KEY, {algorithm:'HS256'});
                    //TODO : redirect To Home Page
                    res.cookie('token',token).redirect('/homePage');
                }else{
                    res.json({msg:'password is false'})
                }
            })
        }).catch(err=> next(err))
    }
}