// Import db.js
require('./models/db');
// Import Dependencies
const path = require('path');
const express = require('express');
// Initialise the app
var app = express();
// Import Routes
const apiRoutes = require('./routes/api-routes');

// setup static files
app.use(express.static('public'));
app.use(express.static('node_modules'));

// our port
var port = 80;

// use api routes in the app
app.use('/api', apiRoutes);

// launch app to listen to specified port
app.listen(port, () => {
    console.log('Express server started at port ' + port);
});
