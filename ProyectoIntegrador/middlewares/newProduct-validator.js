//1) requerir express-validator( destructuring body)
const {body} = require('express-validator')

//2)  crear un array de validaciones y exportar dicho array.
const newProduct = [
    body('imagen') //adentro va el name del campo que queramos validar 
        .notEmpty()
        .withMessage('Debe cargar una imagen para el producto ')
        
]