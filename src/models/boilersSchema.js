const mongoose = require('mongoose');

const boilersSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    boilerType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'boilerTypes'
    },
    hourMaintenanceCost: {
      type: Number,
      required: true
    },
    hourEventualCost: {
      type: Number,
      required: true
    },
    maintenanceRate: {
      type: Number,
      required: true
    }
  }, { timestamp: true }
);

module.exports = mongoose.model('boilers', boilersSchema);
