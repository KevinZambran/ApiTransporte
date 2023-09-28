const Viaje = require("../models/viajes");
const Mantenimiento = require("../models/mantenimientos");
const Vehiculo = require("../models/vehiculos");

// Crear un viaje
async function crearViaje(req, res) {
    try {
        const nuevoViaje = await Viaje.create(req.body);
        res.status(201).json(nuevoViaje);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el viaje" });
    }
}

// Obtener todos los viajes
async function obtenerViajes(req, res) {
    try {
        const viajes = await Viaje.find();
        res.status(200).json(viajes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los viajes" });
    }
}

// Actualizar un viaje por ID
async function actualizarViaje(req, res) {
    const { id } = req.params;
    try {
        const viajeActualizado = await Viaje.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(viajeActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el viaje" });
    }
}

// Eliminar un viaje por ID
async function eliminarViaje(req, res) {
    const { id } = req.params;
    try {
        await Viaje.findByIdAndRemove(id);
        res.status(200).json({
            mensaje:'Viaje eliminado'
        })
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el viaje" });
    }
}

    async function numViajes(req, res) {
        const { placa } = req.params;
        try {
            const viajes= await Viaje.find({"placa": placa})
            res.status(200).json({viajes});
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    }
    async function obtenerInformacionVehiculo(req, res) {
        const placa = req.params.placa; // Supongamos que la placa se pasa como parámetro
    
        try {
            // Obtener el vehículo por placa
            const vehiculo = await Vehiculo.findOne({ placa });
    
            if (!vehiculo) {
                return res.status(404).json({ mensaje: "Vehículo no encontrado" });
            }
    
            // Obtener los números de viajes por vehículo
            const numeroViajes = await Viaje.countDocuments({ placa });
    
            // Obtener la cantidad de mantenimientos en ese vehículo
            const cantidadMantenimientos = await Mantenimiento.countDocuments({ placa });
    
            // Retornar la información
            res.status(200).json({
                vehiculo,
                numeroViajes,
                cantidadMantenimientos,
            });
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la información del vehículo" });
        }
    }
module.exports = {
    crearViaje,
    obtenerViajes,
    actualizarViaje,
    eliminarViaje,
    numViajes,
    obtenerInformacionVehiculo
};
