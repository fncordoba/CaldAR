const boylers = require ("../data/boylers.json");
const fs = require('fs');

const getAllBoylers = () => {
    return boylers;
};

const getBoylersByBuilding = (building) => {
    const boylersByBuilding = boylers.filter(boylers => {
        boylers.building === parseInt(building);
    })
    return boylersByBuilding;
};

const getBoylersById = (id) => {
    const boylersById = boylers.filter(boylers => {
        boylers.id === parseInt(id);
    })
    return boylersById;
};

const removeBoylerById = (id) => {
    const search = boylers.find(boyler => boyler.id.toString() === id);
    const newBoylers = boylers.filter(boyler => boyler.id.toString() !== id);
    if (search) {
        fs.writeFileSync(
            __dirname + '/../data/boylers.json',
            JSON.stringify(newBoylers),
            {encoding: 'utf-8', flag: 'w'}
        );
        return `Boyler with id ${id} deleted`;
    } else{
        return `Boyler with id ${id} not found`;
    }
};


module.exports = {
    getAllBoylers,
    getBoylersByBuilding,
    getBoylersById,
    removeBoylerById
};
