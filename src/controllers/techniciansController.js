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
  try {
    for (let i = 0; i < req.body.boilerTypes.length; i++) {
      const found = await models.BoilerTypes.findById(req.body.boilerTypes[i]);
      if (!found) {
        return res.status(400).json({
          msg: 'Boiler type not found in the database',
        });
      }
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

    const result = await technician.save();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const updateTechnician = async (req, res) => {
  try {
    for (let i = 0; i < req.body.boilerTypes.length; i++) {
      const found = await models.BoilerTypes.findById(req.body.boilerTypes[i]);
      if (!found) {
        return res.status(400).json({
          msg: 'Boiler type not found in the database',
        });
      }
    }

    const result = await models.Technicians.findByIdAndUpdate(req.params.id,
      req.body, { new: true, });

    if (!result) {
      return res.status(400).json({
        msg: 'The building has not been found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has ocurred'
    });
  }
};

const deleteTechnician = async (req, res) => {
  try {
    const findTechnicianInAppointment = await models.Appointments.findOne(req.params.id);
    if (!findTechnicianInAppointment) {
      const result = await models.Technicians.findByIdAndDelete(req.params.id);
      if (!result) {
        return res.status(400).json({
          msg: 'The technician has not been found',
        });
      }
      return res.status(200).json({
        msg: 'The technician has been deleted',
      });
    }
    return res.status(400).json({
      msg: 'The technician is assigned to an appointment',
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
