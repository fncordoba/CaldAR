const fs = require('fs');
const models = require('../models');
let buildings = require('../data/buildings.json');

const getAllBuildings = async (req, res) => {
  try {
    const buildingsFromDB = await models.building.find({});
    res.status(200).json(buildingsFromDB);
  } catch (error) {
    res.status(500).json({
      msg: 'Error ! Couldn\'t find all the buildings'
    });
  }
};

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
