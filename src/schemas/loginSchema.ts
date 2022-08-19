import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.base': '422|"username" must be a string',
    'any.required': '400|"username" is required',
    'string.empty': '400|"username" is required',
  }),
  password: Joi.string().required().messages({
    'string.base': '422|"password" must be a string',
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is required',
  }),
});
export default loginSchema;
