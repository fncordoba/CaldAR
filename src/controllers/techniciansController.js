const models = require('../models');

const getAllTechnicians = async (req, res) => {
  try {
    const technicians = await models.Technicians.find({});

    return res.status(200).json(technicians);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const getTechnicianById = async (req, res) => {
  try {
    const technician = await models.Technicians.findById(req.params.id);

    if (!technician) {
      return res.status(400).json({
        msg: 'The technician has not been found'
      });
    }
    return res.status(200).json(technician);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const createTechnician = async (req, res) => {
  if (!req.body.firstName || !req.body.address || !req.body.lastName || !req.body.phone
  || !req.body.boilerTypes || !req.body.email || !req.body.dateOfBirth
  || !req.body.monthlyCapacity || !req.body.hourRate) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to create a technician'
    });
  }

  const technician = new models.Technicians({
    firstName: req.body.firstName,
    address: req.body.address,
    lastName: req.body.lastName,
    phone: req.body.phone,
    boilerTypes: req.body.boilerTypes,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    monthlyCapacity: req.body.monthlyCapacity,
    hourRate: req.body.hourRate,
  });

  try {
    const result = await technician.save();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const updateTechnician = async (req, res) => {
  if (!req.body.firstName || !req.body.address || !req.body.lastName || !req.body.phone
    || !req.body.boilerTypes || !req.body.email || !req.body.dateOfBirth
    || !req.body.monthlyCapacity || !req.body.hourRate) {
    return res.status(400).json({
      msg: 'Error: missing required fields to update a technician'
    });
  }
  try {
    const result = await models.Technicians.findByIdAndUpdate(
      req.params.id, req.body, { new: true, }
    );

    if (!result) {
      return res.status(400).json({
        msg: 'The technician has not been found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const deleteTechnician = async (req, res) => {
  try {
    const result = await models.Technicians.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(400).json({
        msg: 'The technician has not been found'
      });
    }
    return res.status(200).json({
      msg: 'The technician has been deleted'
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

module.exports = {
  getAllTechnicians,
  getTechnicianById,
  createTechnician,
  updateTechnician,
  deleteTechnician
};
