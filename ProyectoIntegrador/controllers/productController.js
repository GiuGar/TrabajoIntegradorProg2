const db = require('../database/models');
const op = db.Sequelize.Op
//requerimos express validator y validationResult
//Hacemos 2 variables para traer la info de la base de datos
const {validationResult} = require("express-validator")
const Producto = db.Product
const Comentario = db.Comment


const productController = {

       detalleProducto: function(req, res){
            db.Product.findByPk(req.params.id, {
                include: [{association:'usuario'}, {association:'comentarios', include:[{association:'usuario'}]}],
                order: [[{model:db.Comment, as: 'comentarios'},'createdAt', 'DESC']]
            })
            .then(function(data){
                return res.render('product', {data: data})
            })
            .catch(function(err){
                console.log(err);
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
        res.render('product-add');
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

//Comentarios en el detalle del producto

    // comentario: function(req, res){
    //     let id = req.body.id
    //     db.Product.findByPk(id, {include:[{association:'comentarios', include: {association: 'usuario'}},]})
    //     .then(function(data){
    //         if(req.session.user != null){
    //             comment = req.body.comment
    //             db.Comment.create({
    //                 idPost: data.id,
    //                 idUsuario: req.session.id_usuario,
    //                 comentario: comment,
    //                 })
    //             .then(function(info){
    //                 res.redirect('/product/id' + id);  
    //             })
    //             .catch(function(err){
    //                 console.log(err);
    //             }) 
    //         }
    //         else{
    //             res.redirect('/user/login')
    //         }
    //     })
    //     .catch(function(err){
    //         console.log(err);
    //     }) 
    // }
}

module.exports = productController