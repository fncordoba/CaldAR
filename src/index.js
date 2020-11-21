const express = require('express');
const techniciansController = require('./controllers/techniciansController');
const app = express();
const port = 3000;

// getAllTechnicians
app.get("/getAllTechnicians", (req, res)=>{
  const technicians = techniciansController.getAllTechnicians();
  res.json(technicians);
});

// Server connection
app.listen(port, () => {
  console.log(`CaldAR app listening at http://localhost:${port}`);
});