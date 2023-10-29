const { Router } = require('express');
const { checkToken } = require('../middlewares/autMiddlewares');
const {
  payment,
  changeMark,
  updateUser,
  cashout,
} = require('../controllers/userController');
const {
  onlyForCustomer,
  parseBody,
  onlyForCreative,
} = require('../middlewares/basicMiddlewares');
const {
  validateContestCreation,
} = require('../middlewares/validators');
const { uploadContestFiles, uploadAvatar } = require('../utils/fileUpload');

const user = Router();

user.post('/changeMark', checkToken, onlyForCustomer, changeMark);
user.post('/updateUser', checkToken, uploadAvatar, updateUser);
user.post('/cashout', checkToken, onlyForCreative, cashout);
user.post(
  '/pay',
  checkToken,
  onlyForCustomer,
  uploadContestFiles,
  parseBody,
  validateContestCreation,
  payment,
);

module.exports = user;