const technicians = require ("../data/technicians.json");
const fs = require("fs");

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

const removeTechniciansBy = id => {
    const search = technicians.find(technician => technician.id.toString() === id);
    const updatedTechnicians = technicians.filter(technician => !(technician.id.toString() === id));
    if (search){
        fs.writeFileSync(
            __dirname + "/../data/technicians.json",
            JSON.stringify(updatedTechnicians),
            { encoding: 'utf8', flag: 'w' }
        );
        return `Technician with id ${id} deleted`;
    } else {
        return `Technician with id ${id} not found.`;
    }
};

module.exports = {
    getAllTechnicians,
    getTechniciansById,
    getTechniciansBy,
    removeTechniciansBy
};