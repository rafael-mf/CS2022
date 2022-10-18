const Router = require('express').Router
const controller = require('./controller');
const auth = require('../../auth');

const router = new Router();

router.get('/consultar', controller.listarClientes);
router.get('/consultar/:id', controller.buscarCliente);

// router.post('/deletar/:id', controller.deletarCliente);


module.exports = router;