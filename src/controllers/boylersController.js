const fs = require('fs');
const boylers = require('../data/boylers.json');

const getAllBoylers = () => boylers;

const getBoylersByBuilding = building => {
  const boylersByBuilding = boylers.filter(
    boyler => boyler.building.toString() === building
  );
  return boylersByBuilding;
};

const getBoylersById = id => {
  const boylersById = boylers.filter(
    boyler => boyler.id.toString() === id
  );
  return boylersById;
};

const removeBoylerById = id => {
  const search = boylers.find(boyler => boyler.id.toString() === id);
  const newBoylers = boylers.filter(boyler => boyler.id.toString() !== id);
  if (search) {
    fs.writeFileSync(
      `${__dirname}/../data/boylers.json`,
      JSON.stringify(newBoylers),
      { encoding: 'utf-8', flag: 'w' },
    );
    return `Boyler with id ${id} deleted`;
  }
  return `Boyler with id ${id} not found`;
};

module.exports = {
  getAllBoylers,
  getBoylersByBuilding,
  getBoylersById,
  removeBoylerById,
};
