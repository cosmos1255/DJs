const { Contact } = require('../models/contact');
const { Users } = require('../models/users')

// Handle index action
// This is for front page and testing purposes
exports.index = function(req, res)
{
    // contact = contact info
    // function(err, documents)
    Contact.get(function(err, contact)
    {
        if(err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "message",
            message: "Contacts retrieved successfully",
            data: contact
        });
    });
};
/*
export.user = function(req,res)
{
    var user = new Users();
    user.username = req.body.username;
    user.password = req.body.password;
    user.contact = Contact();
    user.save (function(err)
    {
        if (err)
            res.json(err);
        else
            res.json({
                message: "New user created!",
                data:user
            });
    });
};

export.login = function(req, res)
{
    Users.findbyId(req.params.user.id. function (err, user)
    {
        if (err)
            res.json(err);
        else
            res.json({
                message: "user details loading",
                data: user
            });
    });
}
*/
// Handle create contact actions
exports.new = function (req, res) 
{
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    // save the contact and check for errors
    contact.save(function (err) 
    {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New contact created!',
                data: contact
            });
    });
};

// Handle view contact info
exports.view = function (req, res) 
{
    // finds by contacts id
    Contact.findById(req.params.contact_id, function (err, contact) 
    {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

// Handle update contact info
exports.update = function (req, res) 
{
    Contact.findById(req.params.contact_id, function (err, contact) 
    {
        if (err)
            res.send(err);

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        // save the contact and check for errors

        contact.save(function (err) 
        {
            if (err)
                res.json(err);

            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

// Update: remove() is deprecated as of Mongoose 5.5.3
// Needs to be updated to deleteOne() and check if it will work

// Handle delete contact
exports.delete = function (req, res) 
{
    // search for contact id and removes contact info
    Contact.remove({_id: req.params.contact_id}, function (err, contact) 
    {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};