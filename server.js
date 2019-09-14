const path = require('path');
// Import db.js
require('./models/db');
// Import Dependencies
const bodyParser = require('body-parser');
const express = require('express');
// Initialise the app
var app = express();
// Import Routes
const apiRoutes = require('./routes/api-routes');

// setup static files
app.use(express.static('public'));

// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended:true
}));

// body-parser middleware
app.use(bodyParser.json());

// our port
var port = 3000;

// Send messsage for default url aka front page
app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// use api routes in the app
app.use('/api', apiRoutes);

// launch app to listen to specified port
app.listen(port, () => {
    console.log('Express server started at port ' + port);
})


