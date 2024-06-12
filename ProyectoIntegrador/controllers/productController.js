let data = require('../db/index');
const db = require('../database/models');
const op = db.Sequelize.Op
//requerimos express validator y validationResult
const { validationResult } = require ('express-validator')


const productController = {
    detalleProducto: function (req, res) {
        let idEnviado = req.params.id;
        let detalleProducto = [];
        let comentariosProducto = [];
        for (let i = 0; i < data.productos.length; i++) {
            if (idEnviado == data.productos[i].id) {
                detalleProducto.push(data.productos[i]);
                comentariosProducto = data.productos[i].comentarios; // Obtener comentarios del producto
                break; // Terminar el bucle una vez encontrado el producto
            }
        }
        return res.render('product', {
            index: detalleProducto,
            comentarios: comentariosProducto // Pasar los comentarios al render
        })
    },

    resultadosDeBusqueda: function(req, res){
        let buscar = req.query.busqueda
        db.Product.findAll({
            where: [{nombre_producto: {[op.like]:  buscar} }]
        })
        .then(data => {
            return res.render('search-results', { resultados: data })
        }) 
        .catch(error => {
            console.log(error);
        })
    },
        /* let buscar = req.query.busqueda
        let resultados = []

        for (let i = 0; i < data.productos.length; i++) {
            if(buscar.toLowerCase() == data.productos[i].nombre.toLowerCase()) {
                resultados.push(data.productos[i])
            }
        }

        if(resultados.length >= 1) {
            return res.render("search-results", {
                mensaje: `Resultados de búsqueda para ${buscar}`,
                resultados: resultados
            })

        } else {
            return res.render("search-results", {
                mensaje: `No se han encontrado resultados para ${buscar}`,
                resultados: resultados 
            })
            } */
   
    create: function(req,res){ // crea el form
        res.render('product-add');
    },

    storeNewPelicula: function (req, res) {
        //obtenemos resultados de las validaciones
        const errors = validationResult(req) //guarda en la variable resultValidation todos los errores encontrados durante la validación de los campos de la solicitud (req).
        //preguntamos si hay errores y si hay errores los enviamos a la vista
        if (!errors.isEmpty()){ // verificar si el objeto contiene errores con .isEmpty() (que devuelve false si hay errores)
            console.log('errors:', JSON.stringify(errors,null,4));
            return res.render('product-add', {errors: errors.mapped(), oldData: req.body}) // mapped envia los errores a la vista como objeto literal el cual contendra una propiedad con el primer error de cada campo
        //enviamos tambien los contenidos de req.body para oreservar los datos completados por el usuario al volver al formulario.
        }
        else{
            // guardar un nuevo producto en la base de datos
         let product = {
            imagen_producto: req.body.imagen,
            nombre_producto: req.body.nombre_producto,  
            descripcion_producto: req.body.descripcion_producto
         }
         db.Product.create(product)
         .then(function(){
            return res.redirect('/');
         })
         .catch(function(error){
            console.log(error);
         });
        }
        
    },
    // prueba: function(req,res){
    //     db.Product.findAll()
    //     .then(function(productos){
    //         console.log('datos de producto:', JSON.stringify(productos, null, 4))
    //         res.send(productos)
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }
}

module.exports = productController