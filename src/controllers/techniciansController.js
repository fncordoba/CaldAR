const technicians = require ("../data/technicians.json");

const getAllTechnicians = () => {
    return technicians;
};

module.exports = {
    getAllTechnicians
};