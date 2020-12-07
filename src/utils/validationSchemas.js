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

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
});

module.exports = {
  boilersSchema,
  idSchema
};
