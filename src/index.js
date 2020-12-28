const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to the database.');
}).catch((error) => {
  console.log('Cannot connect to the database.', error);
  process.exit();
});

app.listen(port, () => {
  console.log(`CaldAR app listening at http://localhost:${port}`);
});
