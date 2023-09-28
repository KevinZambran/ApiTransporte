var express = require('express');
var app = express();

//cargar ruta
var mantenimientos = require('./routes/mantenimientos');
var vehiculos = require('./routes/vehiculos');
var viajes = require('./routes/viajes');

app.use(express.urlencoded ({extended: false}));
app.use(express.json());

//rutabase
app.use('/apis', mantenimientos);
app.use('/apis', vehiculos);
app.use('/apis', viajes);

module.exports = app; 
