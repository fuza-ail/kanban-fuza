function errorHandler(err,req,res,next){
  if(err.name == 'SequelizeValidationError'){
    res.status(400).json({message: 'The value can not be empty'})
  }else if(err.name == 'SequelizeConnectionError'){
    res.status(500).json({message: 'Internal server error'})
  }else{
    res.status(err.status).json({message: err.message})
  }
}

module.exports = errorHandler