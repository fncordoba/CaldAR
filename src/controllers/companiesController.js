const companies = require('../data/companies.json');

const getAllCompanies = () => companies;

const getCompanyById = (id) => {
    const company = companies.find(company => company.id.toString() === id);
    return company;
};

module.exports = {
    getAllCompanies,
    getCompanyById
};