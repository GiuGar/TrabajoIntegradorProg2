const express = require('express')
const router = express.Router()

let productController = require('../controllers/productController');
const loginValidation = require('../middlewares/login-validator');

router.get('/id/:id', productController.detalleProducto);
router.get('/resultados', productController.resultadosDeBusqueda) //No funciona escribiendo la ruta porque falta el parametro que se obtiene con el buscador. 
router.post('/resultados', buscadorValidations, productController.buscador);
// router.get ('/add', productController.add);

// router.post('/create', productController.create)

// router.post('/', loginValidation,indexController.login)

module.exports = router