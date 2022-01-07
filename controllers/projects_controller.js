// Projects controller : All business logic goes here
const Users = require("../models/user_model");
const Projects = require("../models/project_model");
const technology_model = require("../models/technology_model");
//Method to create a projects
module.exports = {
  createProjects: async (req, res, next) => {
    // Create a projects
    const projectsbody = req.body;
    const project = new Projects(projectsbody);
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
      const users = await Users.findById(member[i]);

      users.projects.push(project);
      await users.save();
    }
    const tech = project.technologies;
    var lengthe = tech.length;
    for (let i = 0; i < lengthe; i++) {
      const technology = await technology_model.findById(tech[i]);
      console.log(technology);
      technology.projects.push(project);
      await technology.save();
    }

    //  teamMembers.projects.push(project);
    //     teamMembers.save();
    res.status(200).json(newProjects);
  },

  // get All Projects
  getAllProjects: async (req, res, next) => {
    const projects = await Projects.find()
      .populate("technologies")
      .populate("teamMembers")
      .populate("projectManager");
    res.status(200).json(projects);
  },

  getProjectinfo: async (req, res, next) => {
    const { projectId } = req.params;
    const project = await Projects.findById(projectId);
    if (!project) {
      return res.status(404).send({
        message: "User not found with id " + req.params.id,
      });
    }
    res.status(200).json(project);
  },
};
