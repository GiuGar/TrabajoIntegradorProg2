var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');
const productController = require('../controllers/productController');

router.get('/', indexController.productos);


module.exports = router;
