const { Schema } = require("mongoose");
const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      desc: "user password",
      trim: true,
      type: String,
      required: true,
      select: false,
    },
    first_name: {
      desc: "The user's first name.",
      trim: true,
      type: String,
      required: true,
    },
    last_name: {
      desc: "The user's last name.",
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
    role:{
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
    technologies : [{
      type : Schema.Types.ObjectId,
      ref: "Technology"

    }],
    projects : [{
      type : [Schema.Types.ObjectId],
      ref: "Projects"
    }]
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", schema);
