const { Contact } = require('../models/contact');
const { Users } = require('../models/users')

module.exports = class ContactController {
  static async getAll(req, res, next) {
    try {
      const user = await Users.findOne({
        username: req.auth.username
      });

      res.json(user.contacts);
    } catch (error) {
      next(error);
    }
  }
  
  static async create(req, res, next) {
    try {
      const user = await Users.findOne({
        username: req.auth.username
      });
      
      user.contacts.push(req.body);

      await user.save();
      
      res.json(req.body);
    } catch (error) {
      next(error);
    }
  }
  
  static async update(req, res, next) {
    try {
      const user = await Users.findOne({
        username: req.auth.username
      });
      
      user.contacts.splice(req.params.id, 1, req.body);

      await user.save();

      res.send();
    } catch (error) {
      next(error);
    }
  }
  
  static async delete(req, res, next) {
    try {
      const user = await Users.findOne({
        username: req.auth.username
      });

      user.contacts.splice(req.params.id, 1);

      await user.save();

      res.send();
    } catch (error) {
      next(error);
    }
  }
}
