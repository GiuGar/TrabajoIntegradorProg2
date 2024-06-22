const { body } = require("express-validator");
const db= require('../database/models');

let commentValidation = [
    body("comentario") 
        .notEmpty()
        .withMessage("No puede enviar un comentario vacío.")
        .isLength({min:3})
        .withMessage("El comentario debe tener al menos 3 caracteres.")
];

module.exports = commentValidation