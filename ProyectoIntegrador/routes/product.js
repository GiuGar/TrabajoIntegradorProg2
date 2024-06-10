const express = require('express')
const router = express.Router()

let productController = require('../controllers/productController')

router.get('/id/:id', productController.detalleProducto);
router.get('/resultados', productController.resultadosDeBusqueda) //No funciona escribiendo la ruta porque falta el parametro que se obtiene con el buscador. 
// router.get ('/add', productController.add);

// router.post('/create', productController.create)


module.exports = router