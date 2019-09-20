const mongoose = require('./db');
const { ContactSchema } = require('./contact');

const UsersSchema = new mongoose.Schema({
    id: String,
    username: String, 
    password: String,
    contacts: [ContactSchema]
});

module.exports = {
  Users: mongoose.model('Users', UsersSchema, 'Users'),
  UsersSchema
};
