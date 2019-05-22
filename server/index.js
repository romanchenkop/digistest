const express = require('express');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const locationRoute = require('./routes/location');

const app = express();
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('connected to db')
);

app.use(bodyParser.json());

app.use('/api/location', locationRoute);

app.use('/api/user', authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running'));
