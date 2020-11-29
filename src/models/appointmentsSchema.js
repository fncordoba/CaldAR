const mongoose = require('mongoose');

const appointmentsSchema = mongoose.Schema(
  {
    building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buildings',
      required: true
    },
    boiler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'boilers'
    },
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'technicians'
    },
    type: {
      type: String,
      enum: ['eventual', 'programmed'],
      required: true
    },
    monthlyHours: {
      type: Number,
      required: true
    }
  }, { timestamp: true }
);

module.exports = mongoose.model('appointments', appointmentsSchema);
