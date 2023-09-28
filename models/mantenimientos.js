var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mantenimientos = schema({
    placa: String,
    fechaMantenimiento: Date,
    fechaFuturoM: Date,
    costo: Number,
    tipo_mantenimiento: String,
    repuesto: {
        nombre: String
    }
});

module.exports = mongoose.model('mantenimiento', mantenimientos);