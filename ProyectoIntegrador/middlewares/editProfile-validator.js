const { body } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require("bcryptjs")

const profileValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar con tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de email valido")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email: value},
            })
                .then(function(user){
                    if(user){
                        throw new Error ("Este email ya está registrado")                    
                    }
                })
        }),
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
        .custom(function(value, {req}){
            if((value) && (value.length < 4)){
                throw new Error("La contraseña debe tener al menos 4 caracteres")
            }
            return true
        }),
]

module.exports = profileValidation;