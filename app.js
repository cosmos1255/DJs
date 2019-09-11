var express = require('express');
var app = express();
const path = require('path');

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://group3:group3cop4331@ec2-18-221-247-1.us-east-2.compute.amazonaws.com:27017';



mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
if (err) {
  console.error(err)
  return
}
});


app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');  
});
app.listen(3000);
