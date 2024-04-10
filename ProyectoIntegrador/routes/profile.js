var express = require('express');
var router = express.Router();

let profileController = require('../controllers/profileController')

router.get('/', profileController.index); // heroes/
router.get('/register', profileController.register);
router.get('/login', profileController.login);

module.exports = router;
