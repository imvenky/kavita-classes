'use strict';
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const config = require('../config/server');
const studentRouter = require('./routes/students');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', studentRouter.routes);

app.listen(config.port, () => console.log('Hello'));