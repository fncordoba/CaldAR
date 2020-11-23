const express = require('express');
const techniciansController = require('./controllers/techniciansController');
const boylerTypesController = require('./controllers/boylerTypesController')
const companiesController = require('./controllers/companiesController');

const app = express();
const port = 3000;

app.get("/getAllTechnicians", (req, res) => {
  const technicians = techniciansController.getAllTechnicians();
  res.json(technicians);
});

app.get("/getAllBoylerTypes", (req, res) => {
  const boylerTypes = boylerTypesController.getAllBoylerTypes();
  res.json(boylerTypes)
});

app.get("/getAllCompanies", (req, res) => {
  const companies = companiesController.getAllCompanies()
  res.json(companies);
});

app.listen(port, () => {
  console.log(`CaldAR app listening at http://localhost:${port}`);
});