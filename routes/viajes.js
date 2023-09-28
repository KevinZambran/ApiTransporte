const express = require('express');
const viajeController = require('../controllers/viajes');
const router = express.Router();

router.post('/viajes', viajeController.crearViaje);
router.get('/viajes', viajeController.obtenerViajes);
router.put('/viajes/:id', viajeController.actualizarViaje);
router.delete('/viajes/:id', viajeController.eliminarViaje);
router.get('/viajesNum/:placa', viajeController.numViajes);
router.get('/viajesPlaca/:placa', viajeController.obtenerInformacionVehiculo);

module.exports = router;
