const mongoose = require('mongoose');

const companiesSchema = mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true
    },
    address: {
      type: 'String',
      required: true
    },
    cuit: {
      type: 'String',
      required: true
    },
    phone: {
      type: 'String',
      required: true
    },
    email: {
      type: 'String',
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('companies', companiesSchema);
