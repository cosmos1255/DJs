// More info about express functions
// https://expressjs.com/en/api.html#res.redirect

// Dependency
var express = require('express');
const authorizationMiddleware = require('../middleware/authorization');
// Initialize express router
var router = express.Router();

// Import contact controller
const contactController = require('../controllers/contactController');
const AuthController = require('../controllers/auth')

// Set default API response
router.get('/', function (req, res) {
    res.json({
    status: "API WORKING",
    message: "HERE IS THE API MESSAGE"
    });
});

router.use(authorizationMiddleware);

router.route('/auth')
  .post(AuthController.post);

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
/*
router.route('/login')
    .get(contactController.login);

router.route('/signup')
    .post(contactController.user);
*/

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
