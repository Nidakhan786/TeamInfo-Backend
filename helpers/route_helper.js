const Joi = require("joi");
const { param } = require("../auth");

module.exports = {
  validateParams: (schema, name) => {
    return (req, res, next) => {
      const result = schema.validate({ param: req["params"][name] });
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        next();
      }
    };
  },
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        next();
      }
    };
  },
  schemas: {
    userSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      emp_id: Joi.number().required()
    }),
    newsSchema: Joi.object().keys({
      newsHeading: Joi.string().required(),
      newsDescription: Joi.string().required(),
    }),
    technologySchema: Joi.object().keys({
      techname: Joi.string().required(),
      usedfor: Joi.string().required(),
    }),
    teammemberSchema: Joi.object().keys({
      totalExperience: Joi.number().required(),
      name: Joi.string().required(),
      role: Joi.string().required(),
      emp_id: Joi.number().required(),
      expertIn: Joi.array().required()
    }),
    projectsSchema: Joi.object().keys({
      projectName: Joi.string().required(),
      projectDescription: Joi.string().required(),
    
    }),
    isSchemas: Joi.object().keys({
      param: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  },
};
