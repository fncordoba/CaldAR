const technicians = require ("../data/technicians.json");

const getAllTechnicians = () => {
    return technicians;
};

const getTechniciansById = id => {
    const technician = technicians.find(technician => technician.id.toString() === id);
    return technician;
};

const getTechniciansBy = (name, lastName) => {
    const technician = technicians.filter(
        technician => technician.name === name && 
        technician.lastName === lastName
        );
    return technician;
};

module.exports = {
    getAllTechnicians,
    getTechniciansById,
    getTechniciansBy
};