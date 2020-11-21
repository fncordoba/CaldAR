const technicians = require ("../data/technicians.json");

// getAllTechnicians
const getAllTechnicians = () => {
    return technicians;
};

module.exports = {
    getAllTechnicians
};