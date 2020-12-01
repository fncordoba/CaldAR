const models = require('../models');

const findAll = async (req, res) => {
  try {
    const appointments = await models.Appointments.find({});
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      msg: 'An error appeared while finding appointments',
    });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Appointments.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      msg: `Could'n find an appointment with id of ${id}`,
    });
  }
};

const createAppointment = async (req, res) => {
  if (!req.body.building || !req.body.boiler || !req.body.technician
    || !req.body.type || !req.body.monthlyHours) {
    return res.status(500).json({
      msg: 'Missing required fields to create an appointment',
    });
  }

  const appointment = new models.Appointments({
    building: req.body.building,
    boiler: req.body.boiler,
    type: req.body.type,
    technician: req.body.technician,
    monthlyHours: req.body.monthlyHours,
  });

  try {
    const result = await appointment.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error appeared while creating the appointment',
    });
  }
};

const deleteAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await models.Appointments.findByIdAndDelete(id);
    res.status(200).json({
      message: `The appointment with an id: ${id} has been deleted.`,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error. The appointment with an id: ${id} couldn't be deleted.`,
    });
  }
};

const updateAppointmentById = async (req, res) => {
  const { id } = req.params;
  if (!req.body.building
    || !req.body.boiler
    || !req.body.technician
    || !req.body.type
    || !req.body.monthlyHours) {
    return res.status(500).json({
      message: 'Error. All fields must be filled to update the appointment record.',
    });
  }
  try {
    const result = await models.Appointments.findByIdAndUpdate(id, req.body, { new: true, });
    return res.status(200).json({
      message: `The appointment with an id: ${id} has been updated.`,
      result
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error. The appointment with an id: ${id} couldn't be updated.`,
    });
  }
};

module.exports = {
  findAll,
  findById,
  createAppointment,
  deleteAppointmentById,
  updateAppointmentById,
};
