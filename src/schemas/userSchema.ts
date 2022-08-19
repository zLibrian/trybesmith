import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.min': '422|"username" length must be at least 3 characters long',
    'string.base': '422|"username" must be a string',
    'string.empty': '400|"username" is required',
    'any.required': '400|"username" is required',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.min': '422|"classe" length must be at least 3 characters long',
    'string.base': '422|"classe" must be a string',
    'string.empty': '400|"classe" is required',
    'any.required': '400|"classe" is required',
  }),
  level: Joi.number().greater(0).required().messages({
    'number.min': '422|"level" length must be at least 3 characters long',
    'number.base': '422|"level" must be a number',
    'number.greater': '422|"level" must be greater than or equal to 1',
    'number.empty': '400|"level" is required',
    'any.required': '400|"level" is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': '422|"password" length must be at least 8 characters long',
    'string.base': '422|"password" must be a string',
    'string.empty': '400|"password" is required',
    'any.required': '400|"password" is required',
  }),
});

export default userSchema;