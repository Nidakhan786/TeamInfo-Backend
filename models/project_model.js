const mongoose = require("../db");
const { Schema } = require("mongoose");
const schema = new mongoose.Schema(
  {
    projectName: String,
    projectDescription: String,
    teamMembers: [
      {
        type: [Schema.Types.ObjectId],
        ref: "Users",
      },
    ],
    projectManager: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    technologies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Technology",
      },
    ],
    startDate: Date,
    endDate: Date,
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Projects", schema);
