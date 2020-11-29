const fs = require('fs');
const models = require('../models');
const boilers = require('../data/boilers.json');

const getAllBoilers = async (req, res) => {
  try {
    const boilersResult = await models.boilers.find({});

    res.status(200).json(boilersResult);
  } catch (error) {
    res.status(500).json({
      message: "Error. Can't get all the boilers.",
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
  getAllBoilers,
  getBoilersByBuilding,
  getBoilersById,
  removeBoilerById
};
