const companies = require('../data/companies.json');
const fs = require('fs');

const getAllCompanies = () => companies;

const getCompanyById = (id) => {
    const company = companies.find(company => company.id.toString() === id);
    return company;
};

const getCompaniesByBuildingId = (buildingId) => {
    const companiesByBuildingId = companies.filter(company => company.buildings.includes(parseInt(buildingId)));
    return companiesByBuildingId;
};

const removeCopmanyById = (id) => {
    const found = companies.find(company => company.id.toString() === id);
    const updatedCompanies = companies.filter(company => (company.id.toString() !== id));
    if(found) {
        fs.writeFileSync(
            __dirname + '/../data/companies.json',
            JSON.stringify(updatedCompanies),
            { encoding: 'utf8', flag: 'w' }
        );
        return `Company with id of ${id} deleted`;
    } else {
        return `Company with id of ${id} not found`;
    }
};


module.exports = {
    getAllCompanies,
    getCompanyById,
    getCompaniesByBuildingId,
    removeCopmanyById
};