const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const document = Joi.number().alphanum().min(7).max(10);
const number = Joi.number().alphanum().min(6).max(10);
const email = Joi.string().email();
const direction = Joi.string().alphanum();

const createUserSchema = Joi.object({
  name: name.required(),
  document: document.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
