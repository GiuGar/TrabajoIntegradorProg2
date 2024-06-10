const { body } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require("bcryptjs")

const registerValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar con tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de email valido")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: value
                },
            })
                .then(function(user){
                    if(user){
                        throw new Error ("Este email ya está registrado")                    
                    }
                })
        }),
    body("usuario")
        .notEmpty()
        .withMessage("Debes elegir un nombre de usuario"),
    body("password")
        .notEmpty()
        .withMessage("Debes completar con una contraseña")
        .isLength({min: 4})
        .withMessage("La contraseña debe tener al menos 4 caracteres"),
    body("nacimiento")
        .isDate()
        .withMessage("Debes agregar una fecha"),
]

module.exports = registerValidation;