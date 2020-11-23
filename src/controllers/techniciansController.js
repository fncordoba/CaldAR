const technicians = require ("../data/technicians.json");

const getAllTechnicians = () => {
    return technicians;
};

const getTechniciansById = id => {
    const technician = technicians.find(technician => technician.id.toString() === id);
    return technician;
};

module.exports = {
    getAllTechnicians,
    getTechniciansById
};