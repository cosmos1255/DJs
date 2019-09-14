// const mongoose = require('mongoose');

// A contact schema
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://JakeT:Ridley006@cluster0-tvpg4.mongodb.net/Manager?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) { 
      console.log('Error in DB connection : ' + error) 
    } else {
      console.log('MongoDB Connection Succeeded.') 
    }
});

module.exports = mongoose;
