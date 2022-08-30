const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().alphanum().min(7).max(20)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).pattern(/^[a-zA-Z0-9]$/)
    .required(),
  confirmPassword: Joi.ref('password'),
  imageUrl: Joi.required(),
});

module.exports = { signUpSchema };
