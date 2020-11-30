const fs = require('fs');
const models = require('../models');
const boilerTypes = require('../data/boilerTypes.json');

const getAllBoilerTypes = async (req, res) => {
  try {
    const boilerTypesResult = await models.boilerTypes.find({});

    res.status(200).json(boilerTypesResult);
  } catch (error) {
    res.status(500).json({
      message: "Error. Can't get all the boilers Types.",
    });
  }
};

const getBoilerTypesByDescription = (description) => {
  const boilerTypesByDescription = boilerTypes.filter(
    boilerType => boilerType.description.includes(description)
  );
  return boilerTypesByDescription;
};

const getBoilerTypeById = id => {
  const boilerTypeById = boilerTypes.find(boilerType => boilerType.id.toString() === id);
  return boilerTypeById;
};

const removeBoilerTypeById = id => {
  const search = boilerTypes.find(boilerType => boilerType.id.toString() === id);
  const boilerTypeId = boilerTypes.filter(boilerType => boilerType.id.toString() !== id);
  if (search) {
    fs.writeFileSync(
      `${__dirname}/../data/boilerTypes.json`,
      JSON.stringify(boilerTypeId),
      { encoding: 'utf-8', flag: 'w' },
    );
    return `Boiler type with id ${id} deleted`;
  }
  return `Boiler type with id ${id} not found`;
};

module.exports = {
  getAllBoilerTypes,
  getBoilerTypesByDescription,
  getBoilerTypeById,
  removeBoilerTypeById,
};
