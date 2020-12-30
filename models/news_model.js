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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("News", schema);
