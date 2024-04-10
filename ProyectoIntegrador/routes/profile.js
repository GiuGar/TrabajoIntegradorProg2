var express = require('express');
var router = express.Router();

let profileController = require('../controllers/profileController')

// router.get('/', heroeController.index); // heroes/
router.get('/register', profileController.register);

module.exports = router;
