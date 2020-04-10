const {Task,User} = require('../models');

class ControllerTask{
  static getTask(req,res,next){
    Task.findAll({include:{model:User}})
    .then(tasks=>{
      res.status(200).json(tasks)
    })
    .catch(err=>{
      next(err)
    })
  }

  static addTask(req,res,next){
    Task.create({
      title:req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.user.UserId
    })
    .then(task=>{
      res.status(200).json(task)
    })
    .catch(err=>{
      next(err)
    })
  }

  static deleteTask(req,res,next){
    Task.findByPk(req.params.id)
    .then(task=>{
      console.log(task)
      return Task.destroy({where: {id:req.params.id}})
    })
    .then(data=>{
      res.status(200).json({ message: 'Task successfully deleted' })
    })
    .catch(err=>{
      next(err)
    })
  }

  static editTask(req,res,next){
    Task.findByPk(req.params.id)
    .then(task=>{
      console.log(task)
      return Task.update({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
      },{where:{id:req.params.id}})
    })
    .then(task=>{
      return Task.findByPk(req.params.id)
    })
    .then(task=>[
      res.status(200).json(task)
    ])
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = ControllerTask;
