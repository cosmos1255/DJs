var express = require('express');
var app = express();
const path = require('path');

const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://<group3>:<group3cop4331>@cluster0-2n09e.mongodb.net/test?retryWrites=true&w=majority';



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

app.listen(8080);
