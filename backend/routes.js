const express = require("express");
const Joi = require("joi");
const router = express.Router();
const validate = require("./validate");
const sendEmail = require("./sendEmail");

router.post(
  "/contactus",
  validate({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    query: Joi.string().required(),
  }),
  sendEmail,
  (req, res) => {
    res.json({ message: "Successfully submitted your form." }).status(200);
  }
);

module.exports = router;
