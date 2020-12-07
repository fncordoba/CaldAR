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

  for (let i = 0; i < req.body.boilers.length; i++) {
    const found = await models.Boilers.findById(req.body.boilers[i]);
    if (!found) {
      return res.status(400).json({
        msg: 'Boiler not found in the database',
      });
    }
  }

  const company = await models.Companies.findById(req.body.company);
  if (!company) {
    return res.status(400).json({
      msg: 'The company assigned to the building was not found in the database.'
    });
  }

  try {
    const building = new models.Building({
      name: req.body.name,
      address: req.body.address,
      company: req.body.company,
      phone: req.body.phone,
      boilers: req.body.boilers,
    });

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
    for (let i = 0; i < req.body.boilers.length; i++) {
      const found = await models.Boilers.findById(req.body.boilers[i]);
      if (!found) {
        return res.status(400).json({
          msg: 'Boiler not found in the database',
        });
      }
    }

    const company = await models.Companies.findById(req.body.company);
    if (!company) {
      return res.status(400).json({
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
    const appointment = await models.Appointments.findOne({ building: req.params.id });
    if (appointment) {
      return res.status(400).json({
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
