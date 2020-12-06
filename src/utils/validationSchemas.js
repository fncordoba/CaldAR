const Joi = require('joi');

const companiesSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),

  address: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  quit: Joi.string()
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

module.exports('companies', companiesSchema);
