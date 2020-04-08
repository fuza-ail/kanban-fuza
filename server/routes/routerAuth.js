const routerAuth = require('express').Router();
const controllerAuth = require('../controllers/controllerAuth')

routerAuth.post('/login', controllerAuth.login);
routerAuth.post('/register',controllerAuth.register);
routerAuth.post('/loginGoogle',controllerAuth.loginGoogle);

module.exports = routerAuth;