const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    totalExperience: {
      desc: "The user's total experience.",
      trim: true,
      type: Number,
      index: true,
      unique: true,
      required: true,
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true,
    },
  
    emp_id: {
      desc: "The user's employee id.",
      trim: true,
      type: Number,
      index: true,
      unique: true,
      required: true,
    },
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
