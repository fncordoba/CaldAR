const models = require('../models');

const getAllCompanies = async (req, res) => {
  try {
    const companies = await models.Companies.find({});

    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await models.Companies.findById(req.params.id);

    if (!company) {
      return res.status(400).json({
        msg: 'The company has not been found'
      });
    }
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const createCompany = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.cuit || !req.body.email) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to create a company'
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
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const updateCompany = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.cuit || !req.body.email) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to update a company'
    });
  }
  try {
    const result = await models.Companies.findByIdAndUpdate(
      req.params.id, req.body, { new: true, }
    );

    if (!result) {
      return res.status(400).json({
        msg: 'The company has not been found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const buildingFromCompany = await models.Building.findOne({ company: req.params.id });
    if (buildingFromCompany) {
      return res.status(400).json({
        msg: 'The company has a building in use',
      });
    }
    const result = await models.Companies.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(400).json({
        msg: 'The company has not been found'
      });
    }
    return res.status(200).json({
      msg: 'The company has been deleted'
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany
};
