const express = require('express');
const techniciansController = require('./controllers/techniciansController');
const boylerTypesController = require('./controllers/boylerTypesController')
const companiesController = require('./controllers/companiesController');
const boylersController = require('./controllers/boylersController');

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

app.get("/getAllBoylers", (req, res) => {
  const boylers = boylersController.getAllBoylers();
  res.json(boylers);
});

app.get("/getAllBoylerTypesByDescription/:description", (req, res) => {
  const description = req.params.description;
  const boylerTyperByDescription = boylerTypesController.getBoylerTypesByDescription(description);
  res.json(boylerTyperByDescription);
});

app.get('/getCompanyById/:id', (req, res) => {
  const id = req.params.id;
  const company = companiesController.getCompanyById(id);
  if(!company){
    res.json({
      msg : 'Company not found'
    })
  }else res.json(company);
});

app.get('/getCompaniesByBuildingId/:buildingId', (req, res) => {
  const buildingId = req.params.buildingId;
  const companies = companiesController.getCompaniesByBuildingId(buildingId);
  res.json(companies);
});

app.get("/getTechniciansById/:id", (req, res) => {
  const id = req.params.id;
  const technician = techniciansController.getTechniciansById(id);
  if (technician){
    res.json(technician);
  } else {
    res.send('No technician found with the Id: ' + id);
  }
});

app.get("/getBoylersByBuilding/:building", (req, res) => {
  const boylersBuilding = boylersController.getBoylersByBuilding(req.params.building);
  res.json(boylersBuilding);
});

app.get("/getAllBoylerTypesById/:id", (req, res) => {
  const id = req.params.id;
  const boylerTypesById = boylerTypesController.getBoylerTypeById(id);
  res.json(boylerTypesById);
})

app.get("/getTechniciansBy/:name/:lastName", (req, res) => {
  const name = req.params.name;
  const lastName = req.params.lastName;
  const technician = techniciansController.getTechniciansBy(name, lastName);
  res.json(technician);
});

app.get("/removeTechniciansBy/:id", (req, res) => {
  const id = req.params.id;
  const result = techniciansController.removeTechniciansBy(id);
  res.send(result);
});
app.get ("/removeBoylerTypeById/:id", (req,res) => {
  const id = req.params.id;
  const result = boylerTypesController.removeBoylerTypeById(id);
  res.json({
    message: result
  });
})

app.listen(port, () => {
  console.log(`CaldAR app listening at http://localhost:${port}`);
});