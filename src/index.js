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
    const category = req.query.category;
    const value = req.query.value;
    let buildings;
    if (category && value) {
        console.log(`GET /buildings category=${category} value=${value}`);
        buildings = buildingsController.getBuildingsByCategory(category, value);
    } else {
        console.log("GET /buildings");
        buildings = buildingsController.getAllBuildings();
    }
    res.json(buildings);
});

app.get("/getBuildingsById/:id", (req, res) => {
    const id = req.params.id;
    const building = buildingsController.getBuildingById(id);
    res.json(building);
});

app.delete("/removeBuilding/:id", (req, res) => {
    const id = req.params.id;
    const buildings = buildingsController.deleteBuildingById(id);
    res.json(buildings);
});

app.listen(port, () => {
  console.log(`CaldAR app listening at http://localhost:${port}`);
});