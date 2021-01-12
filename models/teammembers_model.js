const mongoose = require("../db");
const { Schema } = require("mongoose");
const schema = new mongoose.Schema(
  {
    totalExperience: {
      desc:"The user's total experience.",
      type: Number,
      required: true,
    },
    name: {
      desc: "The user's name.",
      type: String,
      required: true,
    },
  
    emp_id: {
      desc: "The user's employee id.",
      type: Number,
    
    },
    projects : [{
      type : Schema.Types.ObjectId,
      ref: "Projects"
    }],
    role: {
        desc: "User's Role",
        type: String,
        enum: [
          "Frontend Developer",
          "Backend Developer",
          "QA Tester",
          "Automation tester",
          "Hybrid Application Developer",
          "Android Developer",
          "IOS Developer",
          "Architect",
          "Others",
          "Project Manager"
        ],
        required: true,
      },
      expertIn: []
  },

  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("TeamMembers", schema);
