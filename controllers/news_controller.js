// News controller : All business logic goes here
 
const News = require("../models/news_model");
//Method to create a news 
module.exports = {
  createNews: async (req, res, next) => {
    // Create a news
    const news = new News(req.body);
    // Save news to database
    const newNews = await news.save();
    res.status(201).json(newNews);
  },

  // get All News
  getAllNews: async (req, res, next) => {
    const news = await News.find();
    res.status(201).json(news);
  },
};
