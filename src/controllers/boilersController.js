const models = require('../models');

const findAllBoilers = async (req, res) => {
  try {
    const boilersResult = await models.Boilers.find({});

    res.status(200).json(boilersResult);
  } catch (error) {
    res.status(500).json({
      message: "Error. Can't get all the boilers.",
    });
  }
};

const createBoiler = async (req, res) => {
  if (!req.body.description
    || !req.body.boilerType
    || !req.body.hourMaintenanceCost
    || !req.body.hourEventualCost
    || !req.body.maintenanceRate) {
    return res.status(500).json({
      message: 'Error. The boiler must contain all the information required.',
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
      message: 'An error happened, the boiler was not created.',
    });
  }
};

const findBoilerById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Boilers.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: `There is no boiler with an id: ${id}`,
    });
  }
};

const updateBoilerById = async (req, res) => {
  const { id } = req.params;
  if (!req.body.description
    || !req.body.boilerType
    || !req.body.hourMaintenanceCost
    || !req.body.hourEventualCost
    || !req.body.maintenanceRate) {
    return res.status(500).json({
      message: 'Error. All fields must be filled to update the boiler record.',
    });
  }
  try {
    const result = await models.Boilers.findByIdAndUpdate(id, req.body, { new: true, });
    return res.status(200).json({
      message: `The boiler with an id: ${id} has been updated.`,
      result
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error. The boiler with an id: ${id} couldn't be updated.`,
    });
  }
};

const deleteBoilerById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Boilers.findByIdAndDelete(id);
    res.status(200).json({
      message: `The boiler with an id: ${id} has been deleted.`,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error. The boiler with an id: ${id} couldn't be deleted.`,
    });
  }
};

module.exports = {
  findAllBoilers,
  createBoiler,
  findBoilerById,
  updateBoilerById,
  deleteBoilerById
};
