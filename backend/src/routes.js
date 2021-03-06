const express = require('express');
const mailController = require('./controllers/mailController');

const routes = express.Router();

routes.get('/', mailController.test);
routes.get('/sendMail', mailController.sendMail);
routes.get('/sendMailList', mailController.sendMailList);

module.exports = routes;
