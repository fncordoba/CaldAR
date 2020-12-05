const Joi = require('joi');

const boilersSchema = Joi.object({
  description: Joi.string().required(),
  boilerType: Joi.string().required(),
  hourMaintenanceCost: Joi.number().min(0).required(),
  hourEventualCost: Joi.number().min(0).required(),
  maintenanceRate: Joi.number().min(0).required(),
});

module.exports = {
  boilersSchema,
};

/*
module.exports = {
  schemas: {
    boilersSchema: Joi.object().keys({
      description: Joi.string().required(),
      boilerType: Joi.string().required(),
      hourMaintenanceCost: Joi.number().min(0).required(),
      hourEventualCost: Joi.number().min(0).required(),
      maintenanceRate: Joi.number().min(0).required(),
    })
  }
};
*/
