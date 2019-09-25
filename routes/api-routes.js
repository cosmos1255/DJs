const { Users } = require('../models/users');
const bodyParser = require('body-parser')

// Dependency
var express = require('express');
const authorizationMiddleware = require('../middleware/authorization');
// Initialize express router
var router = express.Router();

// Import contact controller
const ContactController = require('../controllers/contact');
const AuthController = require('../controllers/auth');
const StatusError = require('../utilities/status-error');

router.use(bodyParser.json());

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: "API WORKING",
    message: "HERE IS THE API MESSAGE"
  });
});

router.post('/signup', async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    

    if (!username || !password) {
      throw new StatusError({
        status: 400,
        code: 'missing_parameters',
        message: 'A username and password must be provided.'
      });
    }
  
    // find username and password
    const user = await Users.findOne({
      username
    });
  
    if (user) {
      throw new StatusError({
        status: 400,
        message: 'The given username is already taken.',
        code: 'user_exists'
      })
    }
  
    await Users.create({
      username,
      password
    });
    
    res.send(Users.username, Users.password);
  
    res.status(200).send();
  } catch (error) {
    next(error);
  }
})

router.use(authorizationMiddleware);

router.route('/auth')
  .post(AuthController.post);

// Contact routes
router.route('/contacts')
    .get(ContactController.getAll)
    .post(ContactController.create);

router.route('/contacts/:id')
    .put(ContactController.update)
    .delete(ContactController.delete);

// throw status error 500
router.use((error, req, res, next) => {
  if (error) {
    const statusCode = error.statusCode || 500;
    const status = 
    res.status(statusCode).json({
      message: error.message,
      status: error.status || 'internal_server_error',
      statusCode
    });
  } else {
    next();
  }
});
// export router as a module
module.exports = router;
