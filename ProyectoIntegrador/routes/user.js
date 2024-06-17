var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController')
//Requeri el validation de login para usarlo en la ruta
const loginValidation = require('../middlewares/login-validator');
const registerValidations = require("../middlewares/register-validator")

// router.get('/', userController.index); 
router.get('/register', userController.register);
router.post('/register', registerValidations, userController.store);
//  router.get('/prueba', userController.prueba) para probar que el modelo User esta bien, (si anda)

router.get('/login', userController.login);
router.post('/login', loginValidation, userController.loginStore);

router.get('/profile', userController.profile)

// router.get('/edit', userController.profileEdit)
// router.post('/storeprofile', userController.storeProfile)

module.exports = router;