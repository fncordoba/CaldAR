const fs = require('fs');
const models = require('../models');
const boilers = require('../data/boilers.json');

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

const getBoilersByBuilding = building => {
  const boilersByBuilding = boilers.filter(
    boiler => boiler.building.toString() === building
  );
  return boilersByBuilding;
};

const getBoilersById = id => {
  const boilersById = boilers.filter(
    boiler => boiler.id.toString() === id
  );
  return boilersById;
};

const removeBoilerById = id => {
  const search = boilers.find(boiler => boiler.id.toString() === id);
  const newBoilers = boilers.filter(boiler => boiler.id.toString() !== id);
  if (search) {
    fs.writeFileSync(
      `${__dirname}/../data/boilers.json`,
      JSON.stringify(newBoilers),
      { encoding: 'utf-8', flag: 'w' },
    );
    return `Boiler with id ${id} deleted`;
  }
  return `Boiler with id ${id} not found`;
};

module.exports = {
  findAllBoilers,
  createBoiler,
  getBoilersByBuilding,
  getBoilersById,
  removeBoilerById
};
