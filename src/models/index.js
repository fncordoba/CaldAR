const Building = require('./buildings');
const Boilers = require('./boilersSchema');
const companies = require('./companiesSchema');
const technicians = require('./technicians');
const appointments = require('./appointmentsSchema');
const boilerTypes = require('./boilerTypesSchema');

module.exports = {
  Building,
  Boilers,
  companies,
  technicians,
  appointments,
  boilerTypes,
};
