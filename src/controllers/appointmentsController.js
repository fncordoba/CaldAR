const models = require('../models');

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await models.Appointments.find({});

    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await models.Appointments.findById(req.params.id);

    if (!appointment) {
      return res.status(400).json({
        msg: 'The appointment has not been found'
      });
    }
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const createAppointment = async (req, res) => {
  if (!req.body.building || !req.body.boiler || !req.body.technician
    || !req.body.type || !req.body.monthlyHours) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to create an appointment',
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
      msg: 'An error has occurred',
    });
  }
};

const updateAppointment = async (req, res) => {
  if (!req.body.building
    || !req.body.boiler
    || !req.body.technician
    || !req.body.type
    || !req.body.monthlyHours) {
    return res.status(400).json({
      msg: 'Error: Missing required fields to update an appointment',
    });
  }
  try {
    const result = await models.Appointments.findByIdAndUpdate(
      req.params.id, req.body, { new: true, }
    );

    if (!result) {
      return res.status(400).json({
        msg: 'The appointment has not been found'
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const result = await models.Appointments.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(400).json({
        msg: 'The appointment has not been found'
      });
    }
    return res.status(200).json({
      msg: 'The appointment has been deleted'
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred'
    });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
