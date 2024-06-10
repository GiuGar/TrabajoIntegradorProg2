const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');

router.get('/id/:id', productController.detalleProducto);
router.get('/resultados', productController.resultadosDeBusqueda);
router.get('/create', productController.create);
router.post('/store', productController.storeNewPelicula);  // Asegúrate de que esta ruta coincida con la acción del formulario.

module.exports = router;