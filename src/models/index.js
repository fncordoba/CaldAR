const Building = require('./buildings');
const Boilers = require('./boilersSchema');
const Companies = require('./companiesSchema');
const technicians = require('./technicians');
const appointments = require('./appointmentsSchema');
const boilerTypes = require('./boilerTypesSchema');

module.exports = {
  Building,
  Boilers,
  Companies,
  technicians,
  appointments,
  boilerTypes,
};
