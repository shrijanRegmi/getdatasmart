const Joi = require("joi");

const validateFunction = function (content, schema, callback) {
  Joi.validate(content, schema, callback);
};

module.exports = function (schema) {
  return function (req, res, next) {
    validateFunction(req.body, schema, function (err, value) {
      if (err) {
        console.log(err.message);
        res.status(500).send({ success: false, error: err.name });
      } else {
        req.body = value;
        next();
      }
    });
  };
};
