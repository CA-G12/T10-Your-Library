const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(7).max(20)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).pattern(/^[a-zA-Z0-9]$/)
    .required(),
});

module.exports = loginSchema;
