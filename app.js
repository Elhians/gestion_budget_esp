const express = require('express');
require('dotenv').config();
const app = express();
const besoinRoutes = require('./routes/besoin.routes');
const utilisateurRoutes = require('./routes/utilisateur.routes');

app.use(express.json());
app.use('/api/besoins', besoinRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);

module.exports = app;
