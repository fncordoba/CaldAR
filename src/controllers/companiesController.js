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

const companyById = async (req, res) => {
  const { id } = req.params;
  try {
    const dbCompanies = await models.Companies.findById(id);
    res.status(200).json(dbCompanies);
  } catch (error) {
    res.status(500).json({
      msg: `There is no company with id of ${id}`
    });
  }
};

const updateCompany = async (req, res) => {
  const { id } = req.params;
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.cuit || !req.body.email) {
    return res.status(500).json({
      msg: 'Missing required fields to update a company'
    });
  }
  try {
    const result = await models.Companies.findByIdAndUpdate(id, req.body, { new: true, });
    return res.status(200).json({
      msg: 'Updated company below',
      result
    });
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
    res.status(200).json({
      msg: 'The next company has been deleted succesfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'An error occurred while deleting the company',
    });
  }
};

module.exports = {
  createCompany,
  findAllCompanies,
  companyById,
  updateCompany,
  deleteCompany
};
