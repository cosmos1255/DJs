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
app.use(express.static('public', { dotfiles: 'allow' }));
app.use(express.static('node_modules', { dotfiles: 'allow' }));


// our port
var port = 8080;

// use api routes in the app
app.use('/api', apiRoutes);

// launch app to listen to specified port
app.listen(port, () => {
    console.log('Express server started at port ' + port);
});
