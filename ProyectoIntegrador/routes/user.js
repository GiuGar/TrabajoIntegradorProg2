var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
//Requeri el validation de login para usarlo en la ruta
const loginValidation = require('../middlewares/login-validator');
const registerValidations = require("../middlewares/register-validator")
const profileValidation= require('../middlewares/editProfile-validator')


router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/profile/id/:id', userController.profile)
router.get('/edit/profile/id/:id', userController.editProfile)

router.post('/register', registerValidations, userController.store);
router.post('/login', loginValidation, userController.loginStore);
router.post('/logout', userController.logout);
router.post('/edit/profile/id/:id', profileValidation, userController.updateProfile);

module.exports = router;