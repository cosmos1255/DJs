var express = require('express');
var app = express();

var mongoose = require('mongoose');
var mongoDB = 'mongodb://group3:group3cop4331@ec2-18-221-247-1.us-east-2.compute.amazonaws.com:27017/dummyDB';

mongoose.connect(mongoDB, {useNewUrlParse: true});

app.get('/', function (req, res) {
  res.sendFile('home.html', { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

