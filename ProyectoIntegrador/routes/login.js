const express = require('express')
const router = express.Router()

let loginController = require('../controllers/loginController')

router.get('/login', profileController.login); // heroes/

module.exports = router