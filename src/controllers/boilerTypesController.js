const fs = require('fs');
const boilerTypes = require('../data/boilerTypes.json');

const getAllBoilerTypes = () => boilerTypes;

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
