/**
 * Tecnology controller : All business logic goes here
 */
const Technology = require("../models/technology_model");
/**
 * this method is to add the technology
 */
exports.addTech = (req, res) => {
  /**
   * validation request
   */
  if (!req.body.techname || !req.body.usedfor) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  /**
   * add a technology
   */
  const tech = new Technology({
    techname: req.body.techname,
    usedfor: req.body.usedfor,
  });
  /**
   * Save tech to database
   */
  tech
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the technology.",
      });
    });
};

// get All technologies
exports.getAllTech = (req, res) => {
  Technology.find()
    .then((tech) => {
      res.status(200).send(tech);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};
