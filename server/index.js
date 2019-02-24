const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
const knex = require('../config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities', require('./api/cities'));

app.listen(PORT, () => {
    console.log(`Server listening of ${PORT}...`);
});

module.exports = app;