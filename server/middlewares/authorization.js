const {Task} = require('../models');

function authorization(req,res,next){
  Task.findByPk(req.params.id)
  .then(task=>{
    if(task){
      if(task.UserId == req.user.UserId){
        next()
      }else{
        throw {
          status: 403,
          mesasge : 'Unauthorized account'
        }
      }
    }else{
      throw {
        status : '404',
        message: 'Taks not found'
      }
    }
  })
}

module.exports = authorization