const express = require('express');

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('Hello world ta atualizando e tá no arquivo de rotas');
});

module.exports = routes;