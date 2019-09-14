const mongoose = require('./db');

// our model or schema for our users in the database
const ContactSchema = new mongoose.Schema({
    // temporary schema
    name: 
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: 
    {
        type: Date,
        default: Date.now
    }
});

module.exports = {
    Contact: mongoose.model('Contact', ContactSchema), 
    ContactSchema
}