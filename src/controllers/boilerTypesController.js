const models = require('../models');

const getAllBoilerTypes = async (req, res) => {
  try {
    const boilerTypes = await models.BoilerTypes.find({});

    return res.status(200).json(boilerTypes);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const getBoilerTypeById = async (req, res) => {
  try {
    const boilerType = await models.BoilerTypes.findById(req.params.id);

    if (!boilerType) {
      return res.status(400).json({
        msg: 'The boilerType has not been found'
      });
    }
    return res.status(200).json(boilerType);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const createBoilerType = async (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to create a boilerType',
    });
  }

  const newBoilerType = new models.BoilerTypes({
    description: req.body.description,
  });

  try {
    const result = await newBoilerType.save();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const updateBoilerType = async (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to update a boilerType',
    });
  }
  try {
    const result = await models.BoilerTypes.findByIdAndUpdate(
      req.params.id, req.body, { new: true, }
    );

    if (!result) {
      return res.status(400).json({
        msg: 'The boilerType has not been found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const deleteBoilerTypeById = async (req, res) => {
  try {
    const boilerTypesInUseByTechnicians = await models.Technicians
      .findOne({ boilerTypes: req.params.id });
    const boilerTypesInUseByBoilers = await models.Boilers
      .findOne({ boilerType: req.params.id });

    let responseErrorMsg = 'The boilerType it is in use';
    if (!boilerTypesInUseByTechnicians && !boilerTypesInUseByBoilers) {
      const result = await models.BoilerTypes.findByIdAndDelete(req.params.id);

      if (result) {
        return res.status(200).json({
          msg: 'The boilerType has been deleted',
        });
      }

      responseErrorMsg = 'The boilerType has not been found';
    }

    return res.status(400).json({
      msg: responseErrorMsg,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

module.exports = {
  getAllBoilerTypes,
  getBoilerTypeById,
  createBoilerType,
  updateBoilerType,
  deleteBoilerTypeById,
};
