// Team Memeber controller : All business logic goes here
 
const TeamMembers = require("../models/teammembers_model");
const bcrypt = require("bcryptjs");
// Method is to add the team member

module.exports = {
  addTeamMember: async (req, res) => {
   // adding a team member
    const member = new TeamMembers(req.body);
   // save the member to db
    const user = await member.save();
    res.status(200).json(member);
  },
  // Get list of all team members
   getAllMembers: async (req, res) => {
    const member = await TeamMembers.find();
    res.status(200).json(member);
  },
};
