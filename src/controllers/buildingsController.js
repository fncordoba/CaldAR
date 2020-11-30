const models = require('../models');

const getAllBuildings = async (req, res) => {
  try {
    const buildingsFromDB = await models.Building.find({});
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
    address: req.body.address,
    company: req.body.company,
    phone: req.body.phone,
    boilers: req.body.boilers,
  });
  try {
    const result = await building.save();
    return res.status(200).json(result);
  } catch (error) {
    // Error
    return res.status(500).json({
      msg: 'An error appeared while registering a new building',
    });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const buildingsFromDB = await models.Building.findById(id);
    res.status(200).json(buildingsFromDB);
  } catch (error) {
    res.status(500).json({
      msg: `There is no building with if of ${id}`
    });
  }
};

const deleteBuilding = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Building.findByIdAndDelete(id);
    res.status(200).json({
      msg: 'The next building been deleted succesfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'An error appeared while deleting the building',
    });
  }
};

const updateBuilding = async (req, res) => {
  const { id } = req.params;
  if (!req.body.name || !req.body.phone || !req.body.address || !req.body.boilers) {
    return res.status(500).json({
      msg: 'Missing required fields to create a building'
    });
  }
  try {
    const result = await models.Building.findByIdAndUpdate(id, req.body, { new: true, });
    return res.status(200).json({
      msg: 'Updated building below',
      result
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error appeared while updating the building',
    });
  }
};

module.exports = {
  getAllBuildings,
  createBuilding,
  findById,
  deleteBuilding,
  updateBuilding,
};
