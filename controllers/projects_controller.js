// Projects controller : All business logic goes here
const Users = require("../models/user_model");
const Projects = require("../models/project_model");
//Method to create a projects
module.exports = {
  createProjects: async (req, res, next) => {
    // Create a projects
    const projects = req.body;
    const project = new Projects(projects);
    // Save projects to database
    const newProjects = await project.save();
  
    const members = project.teamMembers;
    var length = members.length;
    for (let i = 0; i < length; i++) {
      const user = await Users.findById(members[i]);
      user.projects.push(project);

      await user.save();
    }
    const member = project.projectManager;
    var lengths = member.length;
    for (let i = 0; i < lengths; i++) {
   
      const user = await Users.findById(member[i]);

      user.projects.push(project);
      await user.save();
    
    }
    //  teamMembers.projects.push(project);
    //     teamMembers.save();
    res.status(200).json(newProjects);
  },

  // get All Projects
  getAllProjects: async (req, res, next) => {
    const projects = await Projects.find();
    res.status(200).json(projects);
  },
};
