const express = require('express');
const techniciansController = require('./controllers/techniciansController');
const buildingsController = require('./controllers/buildingsController');

const app = express();
const port = 3000;

app.get("/getAllTechnicians", (req, res) => {
  const technicians = techniciansController.getAllTechnicians();
  res.json(technicians);
});

app.get("/getAllBuildings", (req, res) => {
    const buildings = buildingsController.getAllBuildings();
    res.json(buildings);
  });

app.get("/getBuildingsByAddress/:address", (req, res) => {
    const address = req.params.address;
    const BuildingsByAddress = BuildingsByAddress.getBuildingsByAddress(address);
    res.json(BuildingsByAddress);
});

app.get("/getBuildingsById/:id", (req, res) => {
    const id = req.params.id;
    const building = buildingsController.getBuildingById(id);
    res.json(building);
});

app.get("/removeBuilding/:id", (req, res) => {
    const id = req.params.id;
    const buildings = buildingsController.deleteBuildingById(id);
    res.json(buildings);
});

app.listen(port, () => {
  console.log(`CaldAR app listening at http://localhost:${port}`);
});