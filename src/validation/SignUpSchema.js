const Joi = require('joi');

const signUpSchema = Joi.object({
  name: Joi.string().alphanum().max(20)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().max(20).required(),
  confirmPassword: Joi.ref('password'),
  imageUrl: Joi.required(),
});

module.exports = signUpSchema;
