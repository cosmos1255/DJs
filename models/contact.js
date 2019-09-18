const mongoose = require('./db');

const ContactSchema = new mongoose.Schema({
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