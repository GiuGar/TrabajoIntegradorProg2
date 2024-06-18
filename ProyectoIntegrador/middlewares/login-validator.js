const { body } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require("bcryptjs")

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes ingresar tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de email valido")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: value
                },
            })
                .then(function(user){
                    if(!user){
                        throw new Error ("Este email no está registrado")                    
                    }
                })
                .catch(function(error){
                    console.log(error)
                })
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes completar con una contraseña")
        
    ]
module.exports = loginValidation;

