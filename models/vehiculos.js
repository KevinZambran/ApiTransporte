var mongoose = require('mongoose');
var schema = mongoose.Schema;
var vehiculoSchema = schema({
    carga: String,
    placa: String, // Mantuve el campo placa como String
    conductor: String
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);