const User= require('../models/User')
const {StatusCodes}=require('http-status-codes');
const {BadRequestError}= require('../errors')
const jwt = require('jsonwebtoken')

const register = async(req,res)=>{
   const user = await User.create({...req.body})
   const token = jwt.sign({userID:user._id,name:user.name}, 'jwtSecret',{
       expiresIN:'30d',
   })
    res.status(StatusCodes.CREATED).json({user:user.name},token)
}
const login =async(req,res)=>{
    res.send('login user')
}
module.exports  = {
    register,
    login,
}