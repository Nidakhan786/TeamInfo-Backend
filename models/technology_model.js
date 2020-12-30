const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    techname: {
      desc: "Technology Name",
      type: String,
      required: true,
    },
    usedfor: {
      desc: "News Desc",
      type: String,
      enum: [
        "Frontend",
        "Backend",
        "Mobile App",
        "Devops",
        "Hybrid App",
        "Others",
      ],
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Technology", schema);
