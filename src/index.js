/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const techniciansController = require('./controllers/techniciansController');
const boilerTypesController = require('./controllers/boilerTypesController');
const companiesController = require('./controllers/companiesController');
const buildingsController = require('./controllers/buildingsController');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/getAllTechnicians', (req, res) => {
  const technicians = techniciansController.getAllTechnicians();
  res.json(technicians);
});

app.get('/getAllBoilerTypes', (req, res) => {
  const boilerTypes = boilerTypesController.getAllBoilerTypes();
  res.json(boilerTypes);
});

app.get('/getAllBuildings', (req, res) => {
  const buildings = buildingsController.getAllBuildings();
  res.json(buildings);
});

app.get('/getBuildingsByAddress/:address', (req, res) => {
  const { address } = req.params;
  const buildingsByAddress = buildingsController.getBuildingsByAddress(address);
  res.json(buildingsByAddress);
});

app.get('/getBuildingsById/:id', (req, res) => {
  const { id } = req.params;
  const building = buildingsController.getBuildingById(id);
  if (building) {
    res.json(building);
  } else {
    res.send(`No building found with the Id: ${id}`);
  }
});

app.get('/removeBuilding/:id', (req, res) => {
  const { id } = req.params;
  const buildings = buildingsController.deleteBuildingById(id);
  res.json(buildings);
});

app.get('/getAllCompanies', (req, res) => {
  const companies = companiesController.getAllCompanies();
  res.json(companies);
});

app.get('/getAllBoilerTypesByDescription/:description', (req, res) => {
  const { description } = req.params;
  const boilerTypesByDescription = boilerTypesController.getBoilerTypesByDescription(description);
  res.json(boilerTypesByDescription);
});

app.get('/getCompanyById/:id', (req, res) => {
  const { id } = req.params;
  const company = companiesController.getCompanyById(id);
  if (!company) {
    res.json({
      msg: 'Company not found',
    });
  } else {
    res.json(company);
  }
});

app.get('/getCompaniesByBuildingId/:buildingId', (req, res) => {
  const { buildingId } = req.params;
  const companies = companiesController.getCompaniesByBuildingId(buildingId);
  res.json(companies);
});

app.get('/removeCompanyById/:id', (req, res) => {
  const { id } = req.params;
  const result = companiesController.removeCopmanyById(id);
  res.json({
    msg: result,
  });
});

app.get('/getTechniciansById/:id', (req, res) => {
  const { id } = req.params;
  const technician = techniciansController.getTechniciansById(id);
  if (technician) {
    res.json(technician);
  } else {
    res.send(`No technician found with the Id: ${id}`);
  }
});

app.get('/getAllBoilerTypesById/:id', (req, res) => {
  const { id } = req.params;
  const boilerTypesById = boilerTypesController.getBoilerTypeById(id);
  res.json(boilerTypesById);
});

app.get('/getTechniciansBy/:name/:lastName', (req, res) => {
  const { name } = req.params;
  const { lastName } = req.params;
  const technician = techniciansController.getTechniciansBy(name, lastName);
  res.json(technician);
});

app.get('/removeTechniciansBy/:id', (req, res) => {
  const { id } = req.params;
  const result = techniciansController.removeTechniciansBy(id);
  res.send(result);
});

app.get('/removeBoilerTypeById/:id', (req, res) => {
  const { id } = req.params;
  const result = boilerTypesController.removeBoilerTypeById(id);
  res.json({
    message: result,
  });
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to the database.');
}).catch((error) => {
  console.log('Cannot connect to the database.', error);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`CaldAR app listening at http://localhost:${port}`);
});
