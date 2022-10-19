const Router = require('express').Router
const controller = require('./controller');
const auth = require('../../auth');

const router = new Router();

router.get('/consultar/:ano', controller.listarOrdens);


module.exports = router;