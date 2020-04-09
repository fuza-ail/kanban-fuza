const routerTask = require('express').Router();
const controllerTask = require('../controllers/controllerTask');
const authentication = require('../middlewares/authentication');
const authorization= require('../middlewares/authorization');

routerTask.get('/tasks',authentication,controllerTask.getTask);
routerTask.post('/tasks',authentication,controllerTask.addTask);
routerTask.delete('/tasks/:id',authentication,authorization,controllerTask.deleteTask);
routerTask.put('/tasks/:id',authentication,authorization,controllerTask.editTask)

module.exports = routerTask


