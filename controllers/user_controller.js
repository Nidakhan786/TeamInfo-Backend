/**
 * User controller : All business logic goes here
 */
const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
/**
 * this method is to create the user
 */
exports.create = (req, res) => {
  /**
   * validation request
   */
  if (!req.body.email || !req.body.password || !req.body.first_name) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  /**
   * Create a user
   */
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    emp_id: req.body.emp_id,
  });
  /**
   * Save user to database
   */
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
/**
 * Find all Users
 */
exports.findAll = (req, res) => {
  User.find()
    .sort({ name: -1 })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};
