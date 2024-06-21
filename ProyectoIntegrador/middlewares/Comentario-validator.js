const { body } = require("express-validator");
const db = require("../database/models")

let CommentValidations = [
    body('comentario')
    .notEmpty()
    .withMessage('No se puede enviar un comentario vacio')
]

module.exports = CommentValidations;