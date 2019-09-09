var express = require('express')
var app = express()

const mongo = require('mongodb').MongoClient
const url = 'mongodb://group3:group3cop4331@ec2-18-221-247-1.us-east-2.compute.amazonaws.com:27017'

mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
if (err) {
  console.error(err)
  return
}
})

app.get('/', function (req, res) {
  res.sendFile('home.html', { root: __dirname });
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})

