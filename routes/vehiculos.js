const express = require('express');
const vehiculoController = require('../controllers/vehiculos');
const router = express.Router();

router.post('/vehiculos', vehiculoController.crearVehiculo);
router.get('/vehiculos', vehiculoController.obtenerVehiculos);
router.put('/vehiculos/:id', vehiculoController.actualizarVehiculo);
router.delete('/vehiculos/:id', vehiculoController.eliminarVehiculo);

module.exports = router;
