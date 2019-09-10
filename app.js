var express = require('express');
var app = express();
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<group3>:<group3cop4331>@cluster0-2n09e.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');  
});

app.listen(8080);
