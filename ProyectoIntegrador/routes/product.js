const express = require('express')
const router = express.Router()

let productController = require('../controllers/productController')

router.get('/', productController.detalleProducto)
router.get('/id/:id', productController.detalleProducto )

module.exports = router