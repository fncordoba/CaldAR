const models = require('../models');

const getAllBoilers = async (req, res) => {
  try {
    const boilers = await models.Boilers.find({});

    return res.status(200).json(boilers);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const getBoilerById = async (req, res) => {
  try {
    const boiler = await models.Boilers.findById(req.params.id);

    if (!boiler) {
      return res.status(400).json({
        msg: 'The boiler has not been found',
      });
    }
    return res.status(200).json(boiler);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const createBoiler = async (req, res) => {
  const findBoilerType = await models.BoilerTypes.findById(req.body.boilerType);

  if (findBoilerType.length === 0) {
    return res.status(400).json({
      msg: 'The boiler type do no exist in the DataBase.',
    });
  }
  const newBoiler = new models.Boilers({
    description: req.body.description,
    boilerType: req.body.boilerType,
    hourMaintenanceCost: req.body.hourMaintenanceCost,
    hourEventualCost: req.body.hourEventualCost,
    maintenanceRate: req.body.maintenanceRate,
  });
  try {
    const result = await newBoiler.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const updateBoiler = async (req, res) => {
  const findBoilerType = await models.BoilerTypes.findById(req.body.boilerType);

  if (findBoilerType.length === 0) {
    return res.status(400).json({
      msg: 'The boiler type do no exist in the DataBase.',
    });
  }
  try {
    const result = await models.Boilers.findByIdAndUpdate(req.params.id, req.body, { new: true, });
    if (!result) {
      return res.status(400).json({
        msg: 'The boiler has not been found',
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const deleteBoiler = async (req, res) => {
  try {
    const findBoilerInAppointment = await models.Appointments.find({ boiler: req.body.id });
    // console.log(findBoilerInAppointment);
    const findBoilerInBuildings = await models.Building.find({ boilers: req.body.id });
    // console.log(findBoilerInBuildings);

    if (findBoilerInBuildings.length === 0 && findBoilerInAppointment.length === 0) {
      const result = await models.Boilers.findByIdAndDelete(req.params.id);
      if (!result) {
        return res.status(400).json({
          msg: 'The boiler has not been found',
        });
      }
      return res.status(200).json({
        msg: 'The boiler has been deleted',
      });
    }
    return res.status(400).json({
      msg: 'The boiler it is in use.',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

module.exports = {
  getAllBoilers,
  createBoiler,
  getBoilerById,
  updateBoiler,
  deleteBoiler
};
