let buildings = require ("../data/buildings.json");
const fs = require("fs");

const getAllBuildings = () => {
    return buildings;
};

const getBuildingsByAddress = (address) => {
    return buildings.filter((building) => {
        return building.address === address;
    });
};

const getBuildingById = (id) => {
    const building = companies.find(building => building.id.toString() === id);
    return building;
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
    getBuildingsByAddress,
    getBuildingById,
    deleteBuildingById,
};