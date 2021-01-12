// Projects controller : All business logic goes here
 const TeamMembers = require('../models/teammembers_model');
const Projects = require("../models/project_model");
//Method to create a projects 
module.exports = {
  createProjects: async (req, res, next) => {

    const teamMembers = await TeamMembers.findById(req.body.teamMembers);
    
    // Create a projects
    const projects = req.body;
  const project = new Projects(projects)
  project.teamMembers = teamMembers;
      // Save projects to database
    const newProjects = await project.save();
    teamMembers.projects.push(project);
    teamMembers.save();
    res.status(200).json(newProjects);
  },

  // get All Projects
  getAllProjects: async (req, res, next) => {
    const projects = await Projects.find();
    res.status(200).json(projects);
  },
};
