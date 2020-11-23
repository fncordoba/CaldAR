const companies = require('../data/companies.json');

const getAllCompanies = () => companies;

const getCompanyById = (id) => {
    const company = companies.find(company => company.id.toString() === id);
    return company;
};

const getCompanyByBuildingId = (buildingId) => {
    let matchedCompanies = [];
    companies.forEach(company => {
        company.buildings.forEach( building => {
            if (building.toString() === buildingId){
                matchedCompanies.push(company);
            }
        });
    });
    return matchedCompanies;
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    getCompanyByBuildingId
};