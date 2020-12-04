const models = require('../models');

const createCompany = async (req, res) => {
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
    return res.status(500).json({
      msg: 'An error appeared while registering a new company',
    });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await models.Companies.find({});
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error ! Couldn\'t find companies list'
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await models.Companies.findById(req.params.id);
    if (!company) {
      return res.status(400).json({
        msg: 'The company has not found'
      });
    }
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({
      msg: 'Error ! Couldn\'t find the company'
    });
  }
};

const updateCompany = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.cuit || !req.body.email) {
    return res.status(500).json({
      msg: 'Missing required fields to update a company'
    });
  }
  try {
    const result = await models.Companies.findByIdAndUpdate(
      req.params.id, req.body, { new: true, }
    );
    if (!result) {
      return res.status(400).json({
        msg: 'The company has not found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error appeared while updating the company',
    });
  }
};

const deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Companies.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({
        msg: 'The company has not found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error occurred while deleting the company',
    });
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
};
