const models = require('../models');

const getAllTechnicians = async (req, res) => {
  try {
    const techniciansFromDB = await models.technicians.find({});
    res.status(200).json(techniciansFromDB);
  } catch (error) {
    res.status(500).json({
      msg: 'Error: cannot find all the technicians'
    });
  }
};

module.exports = {
  getAllTechnicians
};
