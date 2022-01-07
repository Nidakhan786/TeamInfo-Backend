const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    newsHeading: {
      desc: "News Heading",
      type: String,
      required: true,
    },
    newsDescription: {
      desc: "News Desc",
      type: String,
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("News", schema);
