'use strict';
const express = require('express');

const cliente = require('./controllers/cliente/router');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Back-end cs",
        version: "0.0.1"
    });
});


router.use('/cliente',  cliente);

module.exports = router;