var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController')
const registerValidations = require("../middlewares/register-validator")

// router.get('/', userController.index); 
router.get('/register', userController.register);
router.post('/register', registerValidations, userController.store);
// router.get('/prueba', userController.prueba) para probar que el modelo User esta bien, (si anda)

router.get('/login', userController.login);

router.get('/profile', userController.profile)

router.get('/edit', userController.profileEdit)
router.post('/storeprofile', userController.storeProfile)

module.exports = router;