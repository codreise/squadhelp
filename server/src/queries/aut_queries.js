const bcrypt = require('bcrypt');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { returnUserFiends } = require('./user_queries');
const CONSTANTS = require('../constants');
const NotFound = require('../errors/UserNotFoundError');

const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

async function issueToken(user) {
  const token = await promisifyJWTSign(
    returnUserFiends(user),
    CONSTANTS.JWT_SECRET,
    {
      expiresIn: CONSTANTS.ACCESS_TOKEN_TIME,
    }
  );
  return token;
}

async function verifyAccessToken(accessToken) {
  const decoded = await promisifyJWTVerify(accessToken, CONSTANTS.JWT_SECRET);
  return decoded;
}

async function passwordCompare(userPassword, foundUserPassword) {
  const passwordMatch = await bcrypt.compare(userPassword, foundUserPassword);
  if (!passwordMatch) {
    throw new NotFound('Wrong password');
  }
}

module.exports = {
  issueToken,
  verifyAccessToken,
  passwordCompare,
};