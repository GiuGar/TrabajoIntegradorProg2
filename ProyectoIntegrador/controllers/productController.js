
const db = require('../database/models');
const op = db.Sequelize.Op
//requerimos express validator y validationResult
//Hacemos 2 variables para traer la info de la base de datos
const {validationResult} = require("express-validator")
const Producto = db.Product
const Comentario = db.Comment


const productController = {
    // detalleProducto: function (req,res) {
    //     Producto.findByPk(req.params.id, {
    //         include: [{association:'User'}, {association:'comentarios', include:[{association:'usuarios'}]}],
    //         order: [[{model:Comentario, as: 'comentarios'},'createdAt', 'DESC']]
    //     })
    //     .then(function(data){
    //         return res.render('product', {data: data})
    //     })
    //     .catch(function(err){
    //         console.log(err);
    //     })
    // },
    detalleProducto: function (req, res) {
        // const id = req.params.id
        // db.Product.findByPk(id)
        // .then(function(data){
        
        //     res.render("product", {data: data} ) //Nos vamos a la vista de index y usamos data que es la que tiene la db
        // })
        // .catch(function(error){
        //     console.log(error)
        // })
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
            include: [{association: "usuario"}, {association: "comentarios"}],

            where: { [op.or] : [
                {nombre_producto: {[op.like]:  `%${buscar}%`}},
                {descripcion_producto: {[op.like]:  `%${buscar}%`}}
                ]},
                
            order: [ ["createdAt", "DESC"] ],
        })
        .then(data => {
            if(data.length >= 1) {
                return res.render("search-results", {
                    mensaje: `Resultados de búsqueda para ${buscar}`,
                    resultados: data
                })
    
            } else {
                return res.render("search-results", {
                    mensaje: `No se han encontrado resultados para ${buscar}`,
                    resultados: data
                })
                }
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
       if(req.session.usuario == undefined){
        return res.redirect('/user/register')
       }
       else{
        return res.redirect('/');
       }
    },
       

    storeNewProducto: function (req, res) {
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