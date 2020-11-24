const companies = require('../data/companies.json');

const getAllCompanies = () => companies;

const getCompanyById = (id) => {
    const company = companies.find(company => company.id.toString() === id);
    return company;
};

const getCompaniesByBuildingId = (buildingId) => {
    const companiesByBuildingId = companies.filter(company => company.buildings.includes(parseInt(buildingId)));
    return companiesByBuildingId;
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    getCompaniesByBuildingId
};