const { Task } = require('../models');

function authorization(req, res, next) {
  Task.findByPk(req.params.id)
    .then(task => {
      if (task) {
        if (task.UserId !== req.user.UserId) {
          throw {
            status: 403,
            message: 'Unauthorized account'
          }
        }
        next()
      } else {
        throw {
          status: 404,
          message: 'Task not found'
        }
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorization