const mongoose = require('mongoose');

const boilerTypesSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('boilerTypes', boilerTypesSchema);
