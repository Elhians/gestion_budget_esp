const express = require('express');
require('dotenv').config();
const app = express();
const besoinRoutes = require('./routes/besoin.routes');

app.use(express.json());
app.use('/api/besoins', besoinRoutes);

module.exports = app;
