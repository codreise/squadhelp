const express = require('express');
const aut = require('./autRoutes');
const user = require('./userRoutes');
const contest = require('./contestRoutes');
const chat = require('./chatRoutes');

const routes = express.Router();

routes.use('/aut', aut);
routes.use('/user', user);
routes.use('/contest', contest);
routes.use('/chat', chat);

module.exports = routes;