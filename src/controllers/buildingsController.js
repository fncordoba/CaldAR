let buildings = require ("../data/buildings.json");
const fs = require("fs");

/*const readBuildingsFile = () => {
    //I reread the file in each fn because it is stored in the cache and does not show me the rewrite.
    const buildings = JSON.parse(fs.readFileSync(__dirname + '/../data/buildings.json', 'utf8'));
    return buildings;
};*/

const getAllBuildings = () => {
    return buildings;
};

const getBuildingsByFirstName = (firstName, value) => {
    const buildings = readBuildingsFile();
    return buildings.filter((building) => {
        return building[firstName].toString() === value;
    });
};

const getBuildingById = (value) => {
    const building = getBuildingsByCategory("id", value);
    return building[0];
};

const deleteBuildingById = (id) => {
    buildings = buildings.filter((building) => {
        return building.id.toString() !== id;
    });
    try {
        fs.writeFileSync(
            __dirname + "/../data/buildings.json",
            JSON.stringify(buildings),
            { encoding: 'utf8', flag: 'w' }
        );
    } catch (err) {
        throw err;
    }

    return buildings;
};

module.exports = {
    getAllBuildings,
    getBuildingsByCategory,
    getBuildingById,
    deleteBuildingById,
};