const companies = require('../data/companies');

const getAllCompanies = function(){
    return companies;
};

module.exports = {
    getAllCompanies,
};