const { body } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require("bcryptjs");

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debe ingresar su email")
        .bail()
        .isEmail()
        .withMessage("Debe ser en formato email")
        .custom(function(value) {
            return db.User.findOne({ where: { email: value } })
                .then(function(user) {
                    if (!user) {
                        throw new Error("Este email no está registrado");
                    }
                })
                
        }),

    body("password")
        .notEmpty()
        .withMessage("Debes completar con una contraseña")
        .custom(function(value, { req }) {
            return db.User.findOne({ where: { email: req.body.email } })
                .then(function(user) {
                    if (user) {
                        const passwordValida = bcryptjs.compareSync(value, user.password);
                        if (!passwordValida) {
                            throw new Error("Contraseña incorrecta");
                        }
                    }
                })
               
        }),
];

module.exports = loginValidation;