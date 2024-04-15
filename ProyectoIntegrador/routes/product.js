const express = require('express')
const router = express.Router()

let productController = require('../controllers/productController')

router.get('/id/:id', productController.detalleProducto);

router.get('/resultados', productController.resultadosDeBusqueda)

router.get ('/add', productController.add);



module.exports = router