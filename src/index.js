/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const techniciansController = require('./controllers/techniciansController');
const boylerTypesController = require('./controllers/boylerTypesController');
const companiesController = require('./controllers/companiesController');
const boylersController = require('./controllers/boylersController');
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

app.get('/getAllBoylerTypes', (req, res) => {
  const boylerTypes = boylerTypesController.getAllBoylerTypes();
  res.json(boylerTypes);
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

app.get('/getAllBoylers', (req, res) => {
  const boylers = boylersController.getAllBoylers();
  res.json(boylers);
});

app.get('/getAllBoylerTypesByDescription/:description', (req, res) => {
  const { description } = req.params;
  const boylerTyperByDescription = boylerTypesController.getBoylerTypesByDescription(description);
  res.json(boylerTyperByDescription);
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

app.get('/getBoylersByBuilding/:building', (req, res) => {
  const boylersBuilding = boylersController.getBoylersByBuilding(req.params.building);
  res.json(boylersBuilding);
});

app.get('/getBoylersById/:id', (req, res) => {
  const boylersId = boylersController.getBoylersById(req.params.id);
  res.json(boylersId);
});

app.get('/getAllBoylerTypesById/:id', (req, res) => {
  const { id } = req.params;
  const boylerTypesById = boylerTypesController.getBoylerTypeById(id);
  res.json(boylerTypesById);
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

app.get('/removeBoylerTypeById/:id', (req, res) => {
  const { id } = req.params;
  const result = boylerTypesController.removeBoylerTypeById(id);
  res.json({
    message: result,
  });
});

app.get('/removeBoylerById/:id', (req, res) => {
  const { id } = req.params;
  const result = boylersController.removeBoylerById(id);
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
