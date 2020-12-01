const mongoose = require('mongoose');

const techniciansSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  boilerTypes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'boilerTypes',
    required: true
  }],
  email: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  monthlyCapacity: {
    type: Number,
    required: true
  },
  hourRate: {
    type: Number,
    required: true
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('technicians', techniciansSchema);
