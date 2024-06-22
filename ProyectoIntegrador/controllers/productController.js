const db = require('../database/models');
const op = db.Sequelize.Op
//requerimos express validator y validationResult
//Hacemos 2 variables para traer la info de la base de datos
const {validationResult} = require("express-validator")
const Producto = db.Product
const Comentario = db.Comment


const productController = {
    detalleProducto: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{association: "usuario"}, {association: "comentarios", include: [{association: "usuario"}]}],
            order: [[{model: "Comment", as: 'comentarios'},'createdAt', 'DESC']]
        })
        .then(function(producto){
            db.Comment.findAll({
                where: {id_producto: producto.id},
                order:[["createdAt", "DESC"]],
                include: [{association: 'usuario'}]
            })
            .then(function(comentario){
                res.render('product', {producto: producto,comentario:comentario}) //producto es el .then de arriba y comentario es el comentario.
            })
            .catch(function(error){
                console.log(error);
            })
            
        })
        .catch(function(error){
            console.log(error);
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
   
    create: function(req, res) {
        if (req.session.user != undefined) {
            return res.render('product-add');
        } else {
            return res.render('registerNewProd');
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
         const userId = req.session.user.id
         let product = {
            
            id_usuario: userId,
            imagen_producto: "/images/products/" + req.body.imagen,
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
       
    edit: function(req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{association: "usuario"}],
        })
        .then(function(producto){
            return res.render('product-edit', {producto: producto})
        })
        .catch(function(error){
            console.log(error);
        })
    },

    editedProduct: function(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("errors:", JSON.stringify(errors, null, 4));
            return res.render("register", { 
                errors: errors.mapped(),
                oldData: req.body
            });
        } else {
    
            db.Product.update({
                imagen_producto: req.body.imagen,
                nombre_producto: req.body.nombre_producto,
                descripcion_producto: req.body.descripcion_producto,
            },
                { where: { id: req.params.id }
            })

            .then(function(product) {
                return res.redirect(`/product/id/${req.params.id}`);
            })

            .catch(function(error) {
                console.log("Error al modificar el producto", error);
            });
        }
    },

    delete: function(req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{association: "usuario"}]
        })
        .then(function(producto){
            let usuario = producto.usuario.id
            return usuario
        })
        .catch(function(error){
            console.log(error);
        })

            if (usuario = req.session.user.id) {
            db.Product.destroy({
                where: [
                    { id: req.params.id }
                ]
            })

            .then(function(product) {
                return res.redirect("/");
            })

            .catch(function(error) {
                console.log("Error al eliminar el producto", error);
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
    comentario: function(req, res) {
        const errors = validationResult(req); //Las validaciones
        if (req.session.user != undefined){ //Si el usuario si este logueado
            if(errors.isEmpty()){ //Analiza los errores

                db.Comment.create({ 
                    //Si no hay errores que me cree estos valores
                    comentario : req.body.comentario,
                    idUser : req.session.user.id,
                   id : req.params.id
                })

                .then(function(product) {
                    return res.redirect(`/product/id/${req.params.id}`);
                })
                .catch(function(error){
                    console.log(error)
                })
            }
            else{
                let id = req.params.id// el id del producto

                db.Product.findByPk(id,{include:[{association:'Comment',
                     include: {association: 'User'}},
                             {association: 'User'}]})
            
            .then(function(data){
                return res.render("product", { 
                    data: data.idProduct,
                    errors: errors.mapped(),
                    oldData: req.body,
                    });
                    
            })
            .catch(function(error){
                console.log(error)
            })
        
        }
        }
        
    },

}

module.exports = productController