const models = require('../models');

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

const createBuilding = async (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.boilers) {
    return res.status(500).json({
      msg: 'Missing required fields to create a building'
    });
  }

  const building = new models.Building({
    name: req.body.name,
    address: req.body.addres,
    company: req.body.company || 'none',
    phone: req.body.phone,
    boilers: req.body.boilers,
  });
  try {
    const result = building.save();
    return res.status(200).send(result);
  } catch (error) {
    // Error
    return res.status(500).json({
      msg: 'Error'
    });
  }
};

module.exports = {
  getAllBuildings,
  createBuilding,
};
