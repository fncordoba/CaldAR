const Joi = require('joi');

const boilersSchema = Joi.object({
  description: Joi.string()
    .required(),
  boilerType: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  hourMaintenanceCost: Joi.number()
    .min(0)
    .required(),
  hourEventualCost: Joi.number()
    .min(0)
    .required(),
  maintenanceRate: Joi.number()
    .min(0)
    .required(),
});

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
const boilerTypesSchema = Joi.object({
  description: Joi.string()
    .required(),
});

const buildingSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  company: Joi.string(),
  boilers: Joi.array().items(Joi.string()).required(),
});

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
});

module.exports = {
  boilersSchema,
  companiesSchema,
  boilerTypesSchema,
  buildingSchema,
  idSchema,
};
