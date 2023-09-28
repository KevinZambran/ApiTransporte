const Mantenimiento = require("../models/mantenimientos");

// Crear un mantenimiento
async function crearMantenimiento(req, res) {
    try {
        const nuevoMantenimiento = await Mantenimiento.create(req.body);
        res.status(201).json(nuevoMantenimiento);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el mantenimiento" + error });
    }
}

// Obtener todos los mantenimientos
async function obtenerMantenimientos(req, res) {
    try {
        const mantenimientos = await Mantenimiento.find({});
        res.status(200).json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los mantenimientos" });
    }
}

// Actualizar un mantenimiento por ID
async function actualizarMantenimiento(req, res) {
    const { id } = req.params;
    try {
        const mantenimientoActualizado = await Mantenimiento.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(mantenimientoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el mantenimiento" });
    }
}

// Eliminar un mantenimiento por ID
async function eliminarMantenimiento(req, res) {
    const { id } = req.params;
    try {
        await Mantenimiento.findByIdAndRemove(id);
        res.status(200).json({
            mensaje:'Mantenimiento eliminado'
        })
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el mantenimiento" });
    }
}

async function obtenerMantenimientosPorVehiculo(req, res) {
    const placa = req.params.placa; // Supongamos que la placa se pasa como parámetro

    try {
        // Obtener los mantenimientos por placa del vehículo
        const mantenimientos = await Mantenimiento.find({ placa });

        // Retornar los mantenimientos
        res.status(200).json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los mantenimientos por vehículo" });
    }
}

module.exports = {
    crearMantenimiento,
    obtenerMantenimientos,
    actualizarMantenimiento,
    eliminarMantenimiento,
    obtenerMantenimientosPorVehiculo
};
