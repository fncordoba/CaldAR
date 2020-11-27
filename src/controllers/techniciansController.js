const fs = require('fs');
const technicians = require('../data/technicians.json');

const getAllTechnicians = () => technicians;

const getTechniciansById = id => {
  const technician = technicians.find(technicianItem => technicianItem.id.toString() === id);
  return technician;
};

const getTechniciansBy = (name, lastName) => {
  const techniciansByNameAndLastName = technicians.filter(
    technician => technician.name === name && technician.lastName === lastName,
  );
  return techniciansByNameAndLastName;
};

const removeTechniciansBy = id => {
  const search = technicians.find(technician => technician.id.toString() === id);
  const updatedTechnicians = technicians.filter(technician => technician.id.toString() !== id);
  if (search) {
    fs.writeFileSync(
      `${__dirname}/../data/technicians.json`,
      JSON.stringify(updatedTechnicians),
      { encoding: 'utf8', flag: 'w' },
    );
    return `Technician with id ${id} deleted`;
  }
  return `Technician with id ${id} not found.`;
};

module.exports = {
  getAllTechnicians,
  getTechniciansById,
  getTechniciansBy,
  removeTechniciansBy,
};
