const boylerTypes = require('../data/boylerTypes.json');

const getAllBoylerTypes = () => boylerTypes;
const getBoylerTypesByDescription = description => {
    const boylerTypesByDescription = boylerTypes.filter(boylerType => boylerType.description.includes(description));
    return boylerTypesByDescription;
};

const getBoylerTypeById = id => {
    const boylerTypeById = boylerTypes.find(boylerType => boylerType.id.toString() === id);
    return boylerTypeById;
}

module.exports = {
    getAllBoylerTypes,
    getBoylerTypesByDescription,
    getBoylerTypeById
};
