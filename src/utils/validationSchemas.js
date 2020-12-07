const Joi = require('joi');

const companiesSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  address: Joi.string()
    .min(3)
    .max(30)
    .required(),
  cuit: Joi.string()
    .alphanum()
    .max(11)
    .required(),
  phone: Joi.string()
    .min(9)
    .max(18)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
});

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
});

module.exports = {
  companiesSchema,
  idSchema
};
