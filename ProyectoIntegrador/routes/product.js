const express = require('express');
const router = express.Router();
let productController = require('../controllers/productController');
const newProductValidation = require('../middlewares/newProduct-validator')

router.get('/id/:id', productController.detalleProducto);
router.get('/resultados', productController.resultadosDeBusqueda) //No funciona escribiendo la ruta porque falta el parametro que se obtiene con el buscador. 
router.get('/create', productController.create)
router.get('/pruebaProd', productController.prueba) //prueba de que el modelo Product anda

//requerimos validaciones de la carpeta middlewares, ahora vamos a requerir los resultados de la validacion de express-validator (en el controlador)
router.post('/store', newProductValidation ,productController.storeNewPelicula);  


// router.post('/', loginValidation,indexController.login)

module.exports = router