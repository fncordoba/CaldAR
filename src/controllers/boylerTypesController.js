const fs = require('fs');
const boylerTypes = require('../data/boylerTypes.json');

const getAllBoylerTypes = () => boylerTypes;

const getBoylerTypesByDescription = (description) => {
  const boylerTypesByDescription = boylerTypes.filter(
    boylerType => boylerType.description.includes(description)
  );
  return boylerTypesByDescription;
};

const getBoylerTypeById = id => {
  const boylerTypeById = boylerTypes.find(boylerType => boylerType.id.toString() === id);
  return boylerTypeById;
};

const removeBoylerTypeById = id => {
  const search = boylerTypes.find(boylerType => boylerType.id.toString() === id);
  const boylerTypeId = boylerTypes.filter(boylerType => boylerType.id.toString() !== id);
  if (search) {
    fs.writeFileSync(
      `${__dirname}/../data/boylerTypes.json`,
      JSON.stringify(boylerTypeId),
      { encoding: 'utf-8', flag: 'w' },
    );
    return `Boyler type with id ${id} deleted`;
  }
  return `Boyler type with id ${id} not found`;
};

module.exports = {
  getAllBoylerTypes,
  getBoylerTypesByDescription,
  getBoylerTypeById,
  removeBoylerTypeById,
};
