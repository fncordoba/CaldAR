const boylerTypes = require('../data/boylerTypes.json');

const getAllBoylerTypes = () => boylerTypes;
const getBoylerTypesByDescription = description => {
    const boylerTypesByDescription = boylerTypes.filter(boylerType => boylerType.description.includes(description));
    return boylerTypesByDescription;
};

module.exports = {
    getAllBoylerTypes,
    getBoylerTypesByDescription
};
