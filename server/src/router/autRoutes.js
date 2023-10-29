const { Router } = require('express');
const { passwordHash, checkAuth } = require('../middlewares/autMiddlewares');
const { registration, login } = require('../controllers/autController');
const {
  validateRegistrationData,
  validateLogin,
} = require('../middlewares/validators');

const aut = Router();

aut.post(
  '/registration',
  validateRegistrationData,
  passwordHash,
  registration
);
aut.post('/login', validateLogin, login);
aut.post('/getUser', checkAuth);

module.exports = aut;