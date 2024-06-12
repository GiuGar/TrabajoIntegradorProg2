let data = require('../db/index');
const db = require('../database/models');
const {validationResult} = require("express-validator");
const { Association } = require('sequelize');
const op = db.Sequelize.Op


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

    storeNewPelicula: function (req, res) {
        // guardar un nuevo producto en la base de datos
        let product = {
            imagen_producto: req.body.imagen,
            nombre_producto: req.body.nombre_producto,  // Corregido para coincidir con el nombre correcto
            descripcion_producto: req.body.descripcion
        }
        db.Product.create(product)
        .then(function(){
            return res.redirect('/');
        })
        .catch(function(error){
            console.log(error);
        });
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