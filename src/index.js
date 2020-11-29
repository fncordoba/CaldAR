/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

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
