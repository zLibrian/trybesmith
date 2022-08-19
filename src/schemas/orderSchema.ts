import Joi from 'joi';

const orderSchema = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': '422|"userId" must be a number',
    'number.greater': '422|"userId" must be greater than or equal to 1',
    'number.empty': '400|"userId" is required',
    'any.required': '400|"userId" is required',
  }),
  productsIds: Joi.array().items(Joi.number().integer().positive()
    .messages({
      'number.min': '422|"productsIds" length must be at least 3 characters long',
      'number.base': '422|"productsIds" must be a number',
      'number.greater': '422|"productsIds" must be greater than or equal to 1',
      'number.empty': '400|"productsIds" is required',
      'any.required': '400|"roductsIds" is required',
    })).required()
    .min(1)
    .messages({
      'any.required': '400|"productsIds" is required',
      'array.min': '422|"productsIds" must include only numbers',
      'array.base': '422|"productsIds" must be an array',
      'array.empty': '422|"productsIds" must include only numbers',

    }),
});

export default orderSchema;