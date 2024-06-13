const { body } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require("bcryptjs")

const loginValidation = [
    body("usuario")
    .notEmpty()
    .withMessage("Debes elegir un nombre de usuario")
    .custom(function(value, {req}){
        if(req.body.usuario[0] != "@"){
            throw new Error("El nombre de usuario debe comenzar con @")
        }
        return true
    }),
body("password")
    .notEmpty()
    .withMessage("Debes completar con una contraseña")
    .isLength({min: 4})
    .withMessage("La contraseña debe tener al menos 4 caracteres")
]
module.exports = loginValidation;

