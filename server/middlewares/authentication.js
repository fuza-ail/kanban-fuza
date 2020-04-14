const jwt = require('jsonwebtoken');
const {User} =require('../models')
require('dotenv').config();

function authentication (req,res,next){
  try{
    const token = req.headers.access_token;
    const decoded = jwt.verify(token,process.env.TOKEN_KEY);
    User.findOne({where:{email:decoded.UserEmail}})
    .then(user=>{
      if(!user){
        throw {
          status: 404,
          message: 'User not found'
        }
      }
    })
    req.user = decoded;
    next()
  }catch(err){
    // bisa di proses di error handler
    if(!err.status||!err.message){
      err.status = 401
      err.message = 'token not found'
    }
    next(err)
  }
}

module.exports = authentication