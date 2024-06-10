const {body} = require('express-validator');

let loginValidation = [body("email")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .isEmail()
    .withMessage("Debes escribir en formato de correo")

]

module.exports = loginValidation;

