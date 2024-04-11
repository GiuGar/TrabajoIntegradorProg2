var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController')

router.get('/', userController.index); // heroes/
router.get('/register', userController.register);
router.get('/login', userController.login);

module.exports = router;