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

const validateAppointment = async (body) => {
  const building = await models.Building.findById(body.building);
  if (!building) {
    return 'The building assigned to the appointment was not found in the database.';
  }
  const boiler = await models.Boilers.findById(body.boiler);
  if (!boiler) {
    return 'The boiler assigned to the appointment was not found in the database.';
  }
  const technician = await models.Technicians.findById(body.technician);
  if (!technician) {
    return 'The technician assigned to the appointment was not found in the database.';
  }

  return '';
};

const createAppointment = async (req, res) => {
  try {
    const errorMsg = await validateAppointment(req.body);
    if (errorMsg) {
      return res.status(400).json({ msg: errorMsg });
    }

    const appointment = new models.Appointments({
      building: req.body.building,
      boiler: req.body.boiler,
      type: req.body.type,
      technician: req.body.technician,
      monthlyHours: req.body.monthlyHours,
    });
    const result = await appointment.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      msg: 'An error has occurred',
    });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const errorMsg = await validateAppointment(req.body);
    if (errorMsg) {
      return res.status(400).json({ msg: errorMsg });
    }

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
