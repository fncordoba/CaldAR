const models = require('../models');

const getAllBoilerTypes = async (req, res) => {
  try {
    const boilerTypesResult = await models.BoilerTypes.find({});

    res.status(200).json(boilerTypesResult);
  } catch (error) {
    res.status(500).json({
      message: 'Error trying to fetch boilers type',
    });
  }
};

const createBoilerType = async (req, res) => {
  if (!req.body.description) {
    return res.status(500).json({
      message: 'Error. The boiler type must contain all the information required.',
    });
  }

  const newBoilerTypes = new models.BoilerTypes({
    description: req.body.description,
  });
  try {
    const result = await newBoilerTypes.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'An error happened, the boiler type was not created.',
    });
  }
};

const getBoilerTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.BoilerTypes.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: `There is no boiler Type with an id: ${id}`,
    });
  }
};

const updateBoilerTypeById = async (req, res) => {
  const { id } = req.params;
  if (!req.body.description) {
    return res.status(500).json({
      message: 'Error. Description field must be filled to update the boiler record.',
    });
  }
  try {
    const result = await models.BoilerTypes.findByIdAndUpdate(id, req.body, { new: true, });
    return res.status(200).json({
      message: `The boiler type with an id: ${id} has been updated.`,
      result
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error. The boiler type with an id: ${id} couldn't be updated.`,
    });
  }
};

const deleteBoilerTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.BoilerTypes.findByIdAndDelete(id);
    res.status(200).json({
      message: `The boiler type with an id: ${id} has been deleted.`,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error. The boiler type with an id: ${id} couldn't be deleted.`,
    });
  }
};

module.exports = {
  getAllBoilerTypes,
  createBoilerType,
  getBoilerTypeById,
  updateBoilerTypeById,
  deleteBoilerTypeById,
};
