require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', require('../routes'));

module.exports = app;