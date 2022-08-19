import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.min': '422|"name" length must be at least 3 characters long',
    'string.base': '422|"name" must be a string',
    'string.empty': '400|"name" is required',
    'any.required': '400|"name" is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.min': '422|"amount" length must be at least 3 characters long',
    'string.base': '422|"amount" must be a string',
    'string.empty': '400|"amount" is required',
    'any.required': '400|"amount" is required',
  }),
});

export default productSchema;