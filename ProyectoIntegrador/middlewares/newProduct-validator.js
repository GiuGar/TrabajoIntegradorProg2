//1) requerir express-validator( destructuring body)
const {body} = require('express-validator')
//requerimos expess-validator y validationResult

//2)  crear un array de validaciones y exportar dicho array.
const newProductValidation = [
    body('imagen') //adentro va el name del campo que queramos validar 
        .notEmpty()
        .withMessage('Debe cargar una imagen para el producto '),
    body('nombre_producto')
        .notEmpty()
        .withMessage('Debes asignar un nombre al producto'),
    body('descripcion_producto')
        .notEmpty()
        .withMessage('La descripción del producto es obligatoria')
]
module.exports = newProductValidation
