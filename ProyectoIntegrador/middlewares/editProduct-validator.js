const {body} = require('express-validator')
const db = require("../database/models")

const editProductValidation = [
    body('imagen') 
        .notEmpty()
        .withMessage('Debe cargar una imagen para el producto '),
    body('nombre_producto')
        .notEmpty()
        .withMessage('Debes asignar un nombre al producto'),
    body('descripcion_producto')
        .notEmpty()
        .withMessage('La descripción del producto es obligatoria')
]
module.exports = editProductValidation