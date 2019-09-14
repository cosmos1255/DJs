const atob = require('atob');
const md5 = require('md5');
const { Users } = require('../models/users');
const StatusError = require('../utilities/status-error');

module.exports = async function(req, res, next) {
  try {
    const [type, encodedCredentials] = req.header("Authorization").split(' ');
    const [username, password] = atob(encodedCredentials).split(':');
    
    // find username and password
    const user = await Users.findOne({
        username,
        password: password
    });
  
    // if user cannot be find, throw status error
    if (!user) {
      throw new StatusError({
        message: 'Username / Password is invalid.',
        status: 'authorization_failed',
        statusCode: 401
      });
    }
  
    next();
  } 
  // catches error
  catch (error) {
    next(error);
  }
};