const models = require('../models');

const createCompany = async (req, res) => {
  // eslint-disable-next-line max-len
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.cuit || !req.body.email) {
    return res.status(500).json({
      msg: 'Missing required fields to create a company'
    });
  }

  const company = new models.Companies({
    name: req.body.name,
    address: req.body.address,
    cuit: req.body.cuit,
    phone: req.body.phone,
    email: req.body.email,
  });
  try {
    const result = await company.save();
    return res.status(200).json(result);
  } catch (error) {
    // Error
    return res.status(500).json({
      msg: 'An error appeared while registering a new company',
    });
  }
};

const findAllCompanies = async (req, res) => {
  try {
    const dbCompanies = await models.Companies.find({});
    res.status(200).json(dbCompanies);
  } catch (error) {
    res.status(500).json({
      msg: 'Error ! Couldn\'t find companies list'
    });
  }
};

module.exports = {
  createCompany,
  findAllCompanies
};
