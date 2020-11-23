// const buildings = require ("../data/buildings.json");
const fs = require("fs");

const readBuildingsFile = () => {
    const buildings = JSON.parse(fs.readFileSync(__dirname + '/../data/buildings.json', 'utf8'));
    return buildings;
};

const getAllBuildings = () => {
    const buildings = readBuildingsFile();
    return buildings;
};

const getBuildingsByCategory = (category, value) => {
    const buildings = readBuildingsFile();
    return buildings.filter((building) => {
        return building[category].toString() === value;
    });
};

const getBuildingById = (value) => {
    const building = getBuildingsByCategory("id", value);
    return building[0];
};

const deleteBuildingById = (id) => {
    const buildings = readBuildingsFile();
    const newAllBuildings = buildings.filter((building) => {
        return building.id.toString() !== id;
    });
    const content = JSON.stringify(newAllBuildings)
    try {
        fs.writeFileSync(__dirname + "/../data/buildings.json", content, { encoding: 'utf8', flag: 'w' });
    } catch (err) {
        throw err;
    }
    
    return newAllBuildings;
};

module.exports = {
    getAllBuildings,
    getBuildingsByCategory,
    getBuildingById,
    deleteBuildingById,
};