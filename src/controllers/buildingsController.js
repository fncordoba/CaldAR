const fs = require('fs');
let buildings = require('../data/buildings.json');

const getAllBuildings = () => buildings;

const getBuildingsByAddress = address => buildings.filter(building => building.address === address);

const getBuildingById = id => {
  const building = buildings.find(buildingItem => buildingItem.id.toString() === id);
  return building;
};

const deleteBuildingById = id => {
  buildings = buildings.filter(building => building.id.toString() !== id);
  fs.writeFileSync(
    `${__dirname}/../data/buildings.json`,
    JSON.stringify(buildings),
    { encoding: 'utf8', flag: 'w' },
  );

  return buildings;
};

module.exports = {
  getAllBuildings,
  getBuildingsByAddress,
  getBuildingById,
  deleteBuildingById,
};
