const express = require('express');
const cors = require('cors');
const cardRoutes = require('./routes/cardRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/cards', cardRoutes);

module.exports = app;
