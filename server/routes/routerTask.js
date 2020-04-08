const routerTask = require('express').Router();
const controllerTask = require('../controllers/controllerTask');
const authentication = require('../middlewares/authentication');
const authorization= require('../middlewares/authorization');

routerTask.get('/task',authentication,controllerTask.getTask);
routerTask.post('/task',authentication,controllerTask.addTask);
routerTask.delete('/task/:id',authentication,authorization,controllerTask.deleteTask);
routerTask.put('/task/:id',authentication,authorization,controllerTask.editTask)

module.exports = routerTask


