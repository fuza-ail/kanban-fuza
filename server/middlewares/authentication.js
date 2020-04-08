const jwt = require('jsonwebtoken');
const {User} =require('../models')
require('dotenv').config();

function authentication (req,res,next){
  try{
    const token = req.headers.access_token;
    if(token){
      const decoded = jwt.verify(token,process.env.TOKEN_KEY);
      req.user = decoded;
      User.findOne({where:{email:decoded.UserEmail}})
      .then(user=>{
        if(user){
          next()
        }else{
          throw {
            status: 404,
            message: 'User not found'
          }
        }
      })
    }else{
      throw {
        status : 404,
        message: 'Token not found'
      }
    }
  }catch(err){
    next(err)
  }
}

module.exports = authentication