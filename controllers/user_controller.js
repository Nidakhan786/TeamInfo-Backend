// USER CONTROLLER : All Business Logic goes here

// Imports
const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
const Technology = require("../models/technology_model");

module.exports = {
  //Creating a user method - Signup
  create: async (req, res, next) => {
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      emp_id: req.body.emp_id,
      role: req.body.role,
    });
    // Save user to database
    const newUser = await user.save();
    res.status(200).json(newUser);
  },

  // Finding all Users
  findAll: async (req, res, next) => {
    const user = await User.find().populate("projects");
    res.status(200).json(user);
  },

  getUserProfile: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId)
      .populate("projects")
      .populate("technologies");
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      });
    }
    res.status(200).json(user);
  },
  getUsersTechnologies: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("technologies");

    res.status(200).json(user.technologies);
  },

  newUserTechnology: async (req, res, next) => {
    const { userId } = req.params;
    const newTech = new Technology(req.body);

    const user = await User.findById(userId);
    newTech.users = user;
    await newTech.save();
    user.technologies.push(newTech);
    await user.save();
    res.status(200).json(newTech);
  },
  editProfile: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (!user) {
      return res.status(404).send({
        message: "no user found",
      });
    }
    res.status(200).json(user);
    // .then((user) => {
    //   if (!user) {
    //     return res.status(404).send({
    //       message: "no user found",
    //     });
    //   }
    //   res.status(200).send(user);
    // })
    // .catch((err) => {
    //   return res.status(404).send({
    //     message: "error while updating the post",
    //   });
    // });
  },
};
