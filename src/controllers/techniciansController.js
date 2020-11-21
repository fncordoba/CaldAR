// Create express server
const express = require('express');
const app = express();
const technicians = require ("../data/technicians.json")
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));


// getAllTechnicians
function getAllTechnicians(){
    app.get("/", (req, res)=>{
        res.json(technicians)
    });
}

getAllTechnicians();