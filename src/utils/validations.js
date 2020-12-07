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
  const result = schema.validate({ [name]: req.params[name] });
  if (result.error) {
    return res.status(400).json({
      error: result.error,
      message: 'Incorrect request params',
    });
  }
  return next();
};
<<<<<<< HEAD

=======
>>>>>>> 7b39fe6 (feature-77-pullrequest-changes: fixed asynchronous issue with  a for loop)

module.exports = {
  validateBody,
  validateParam
};
