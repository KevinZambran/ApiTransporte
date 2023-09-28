const Vehiculo = require("../models/vehiculos");

// Crear un vehículo
async function crearVehiculo(req, res) {
    try {
        const nuevoVehiculo = await Vehiculo.create(req.body);
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el vehículo" });
    }
}

// Obtener todos los vehículos
async function obtenerVehiculos(req, res) {
    try {
        const vehiculos = await Vehiculo.find({});
        res.status(200).json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los vehículos" });
    }
}

// Actualizar un vehículo por ID
async function actualizarVehiculo(req, res) {
    const { id } = req.params;
    try {
        const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(vehiculoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el vehículo" });
    }
}

// Eliminar un vehículo por ID
async function eliminarVehiculo(req, res) {
    const { id } = req.params;
    try {
        await Vehiculo.findByIdAndRemove(id);
        res.status(200).json({
            mensaje:'Vehiculo eliminado'
        })
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el vehículo" });
    }
}

module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    actualizarVehiculo,
    eliminarVehiculo,
};
