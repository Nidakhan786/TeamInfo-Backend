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
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", schema);
