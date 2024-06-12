const express = require('express');
const router = express.Router();

let productController = require('../controllers/productController');

router.get('/id/:id', productController.detalleProducto);
router.get('/resultados', productController.resultadosDeBusqueda) //No funciona escribiendo la ruta porque falta el parametro que se obtiene con el buscador. 
router.get('/create', productController.create)
// router.get('/pruebaProd', productController.prueba) //prueba de que el modelo Product anda


router.post('/store', productController.storeNewPelicula);  


// router.post('/', loginValidation,indexController.login)

module.exports = router