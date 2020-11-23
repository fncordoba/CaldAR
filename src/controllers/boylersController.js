const boylers = require ("../data/boylers.json");

const getAllBoylers = () => {
    return boylers;
};

const getBoylersByBuilding = (building) => {
    const boylersByBuilding = boylers.filter(boylers => {
        boylers.building === parseInt(building);
    })
    return boylersByBuilding;
};

module.exports = {
    getAllBoylers,
    getBoylersByBuilding
};
