// Tecnology controller : All business logic goes here
 
const Technology = require("../models/technology_model");
// Method  to add the technology
 
module.exports = {
  addTech: async (req, res, next) => {
    // Creating a new technology
    const tech = new Technology(req.body);
    // Save the Technology to database
    const technology = await tech.save();
    res.status(201).json(technology);
  },

  // get All technologies
  getAllTech: async (req, res, next) => {
    const technologiesList = await Technology.find();
    res.status(201).json(technologiesList);
  },
};
