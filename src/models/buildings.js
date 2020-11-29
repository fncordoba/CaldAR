const mongoose = require('mongoose');

const buildingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    adress: {
      type: String,
      required: true
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies',
    },
    phone: {
      type: String,
      required: true
    },
    boilers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'boilers',
      required: true,
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('buildings', buildingSchema);
