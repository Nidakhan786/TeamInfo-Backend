const mongoose = require("../db");
const { Schema } = require("mongoose");
const schema = new mongoose.Schema(
  {
    projectName: String,
    projectDescription: String,
    projectTechnology: {
      type: Schema.Types.ObjectId,
      ref: "Technology",
    },
    teamMembers: {
      type: Schema.Types.ObjectId,
      ref: "TeamMembers",
    },
    projectManager: {
      type: Schema.Types.ObjectId,
      ref: "TeamMembers",
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Projects", schema);
