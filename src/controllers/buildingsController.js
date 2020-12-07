const models = require('../models');

const getAllBuildings = async (req, res) => {
  try {
    const buildings = await models.Building.find({});

    return res.status(200).json(buildings);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const getBuildingById = async (req, res) => {
  try {
    const building = await models.Building.findById(req.params.id);

    if (!building) {
      return res.status(400).json({
        msg: 'The building has not been found'
      });
    }
    return res.status(200).json(building);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const createBuilding = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.boilers) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to create a building'
    });
  }
  const boilers = await models.Boilers.find({ _id: req.body.boilers });
  console.log(boilers);
  const missingBoilers = [];
  req.body.boilers.forEach(boiler => {
    // eslint-disable-next-line no-underscore-dangle
    const found = boilers.find(existingBoiler => existingBoiler._id.toString() === boiler);
    if (!found) {
      missingBoilers.push(boiler);
    }
  });
  if (missingBoilers.length > 0) {
    return res.status(500).json({
      msg: 'The next boilers were not found in the database',
      missingBoilers,
    });
  }
  const company = await models.Companies.findById(req.body.company);
  if (!company) {
    return res.status(500).json({
      msg: 'The company assigned to the building was not found in the database.'
    });
  }

  const building = new models.Building({
    name: req.body.name,
    address: req.body.address,
    company: req.body.company,
    phone: req.body.phone,
    boilers: req.body.boilers,
  });

  try {
    const result = await building.save();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const updateBuilding = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.boilers) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to update a building'
    });
  }
  try {
    const boilers = await models.Boilers.find({ _id: req.body.boilers });
    console.log(boilers);
    const missingBoilers = [];
    req.body.boilers.forEach(boiler => {
      // eslint-disable-next-line no-underscore-dangle
      const found = boilers.find(existingBoiler => existingBoiler._id.toString() === boiler);
      if (!found) {
        missingBoilers.push(boiler);
      }
    });
    if (missingBoilers.length > 0) {
      return res.status(500).json({
        msg: 'The next boilers were not found in the database',
        missingBoilers,
      });
    }
    const company = await models.Companies.findById(req.body.company);
    if (!company) {
      return res.status(500).json({
        msg: 'The company assigned to the building was not found in the database.'
      });
    }
    const result = await models.Building.findByIdAndUpdate(req.params.id, req.body, { new: true, });

    if (!result) {
      return res.status(400).json({
        msg: 'The building has not been found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

const deleteBuilding = async (req, res) => {
  try {
    const appointment = await models.Appointments.find({ building: req.params.id });
    if (appointment) {
      return res.status(500).json({
        msg: 'The building you\'re trying to deleted has an appointment',
      });
    }
    const result = await models.Building.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(400).json({
        msg: 'The building has not been found'
      });
    }
    return res.status(200).json({
      msg: 'The building has been deleted'
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

module.exports = {
  getAllBuildings,
  getBuildingById,
  createBuilding,
  updateBuilding,
  deleteBuilding
};
