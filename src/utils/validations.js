const validateBody = schema => (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({
      error: result.error,
      message: 'Incorrect request body',
    });
  }
  return next();
};

const validateParam = (schema, name) => (req, res, next) => {
  const result = schema.validate({ param: req.params[name] });
  if (result.error) {
    return res.status(400).json({
      error: result.error,
      message: 'Incorrect request params',
    });
  }
  return next();
};

/*
// VALIDATE THAT THE BOILER TYPE EXISTS IN THE DB
const validateBoilerType = (req, res, next) => {
  if req.params['boilerType'] {

  }
  return next();
};
*/

/*
// VALIDATE THAT THE BOILER IT'S NOT ASSOCIATED TO AN APPOINTMENT OR BUILDING
const validateRemove = (req, res, next) => {
  if req.params['id'] {

  }
  return next();
};
*/

module.exports = {
  validateBody,
  validateParam,
  // validateBoilerType,
  // validateRemove,
};
