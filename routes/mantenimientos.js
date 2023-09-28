const express = require('express');
const mantenimientoController = require('../controllers/mantenimientos');
const router = express.Router();

// Crear un mantenimiento
router.post('/mantenimientos', mantenimientoController.crearMantenimiento);

// Obtener todos los mantenimientos
router.get('/mantenimientos', mantenimientoController.obtenerMantenimientos);

// Actualizar un mantenimiento por ID
router.put('/mantenimientos/:id', mantenimientoController.actualizarMantenimiento);

// Eliminar un mantenimiento por ID
router.delete('/mantenimientos/:id', mantenimientoController.eliminarMantenimiento);
router.get('/mantenimientos/:placa', mantenimientoController.obtenerMantenimientosPorVehiculo);

module.exports = router;