const express = require('express')
const router = express.Router()

let productController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/product/resultados', productController.resultadosDeBusqueda);
// router.get('/product/:id', productController.detalleProducto)
router.get('/add', productController.productoAdd); 

module.exports = router