const technicians = require ("../data/technicians.json");

const getAllTechnicians = () => {
    return technicians;
};

const getTechniciansById = id => {
    const technician = technicians.filter(technician => technician.id === id);
    return technician;
};

module.exports = {
    getAllTechnicians,
    getTechniciansById
};