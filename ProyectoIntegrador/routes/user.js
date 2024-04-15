var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController')

router.get('/register', userController.register);

router.get('/login', userController.login);

router.get('/profile', userController.profile);
router.get('/profile/edit', userController.profileEdit);

module.exports = router;