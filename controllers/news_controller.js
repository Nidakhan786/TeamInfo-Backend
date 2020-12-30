/**
 * News controller : All business logic goes here
 */
const News = require("../models/news_model");
/**
 * this method is to create the news
 */
exports.createNews = (req, res) => {
  /**
   * validation request
   */
  if (!req.body.newsHeading || !req.body.newsDescription) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  /**
   * Create a news
   */
  const news = new News({
    newsHeading: req.body.newsHeading,
    newsDescription: req.body.newsDescription,
  });
  /**
   * Save mews to database
   */
  news
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the News.",
      });
    });
};

// get All News
exports.getAllNews = (req, res) => {
  News.find()
    .populate("user")
    .then((news) => {
      res.status(200).send(news);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};
