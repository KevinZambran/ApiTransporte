var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var viajeSchema = new Schema({
    placa: String, // Mantuve el campo placa como String
    tipo_viaje: String,
    origen: String,
    destino: String,
    fechaV: Date,
    numSemana: Number,
    guia_de_remision: {
        nombre: String
    },
    viaticos: Number
});

module.exports = mongoose.model('Viaje', viajeSchema);
