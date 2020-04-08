const router = require('express').Router();
const routerAuth = require('./routerAuth');
const routerTask = require('./routerTask')
const eventHandler = require('../middlewares/errorHandler')

router.use(routerAuth)
router.use(routerTask)

router.use(eventHandler)


module.exports = router