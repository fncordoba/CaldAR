const models = require('../models');

const findAll = async (req, res) => {
  try {
    const appointments = await models.appointments.find({});
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      msg: 'An error appeared while finding appointments',
    });
  }
};

module.exports = {
  findAll,
};
