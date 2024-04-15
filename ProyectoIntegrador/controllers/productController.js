let data = require('../db/index');

const productController = {
    index: function(req, res){
        return res.render("product", {'data': data
        })
    },
    resultadosDeBusqueda: function(req, res){
        return res.render("search-results", {'data': data
        })
    },
    productoAdd: function(req,res) {
        return res.render("productadd", { 'data': data
        })


    }
}

    
    // detalleProducto: function (req, res) {
    //     let idEnviado = req.params.id
    //     let detalleProducto = []
    //     for (let i = 0; i < data.productos.length; i++) {
    //         if (idEnviado == data.productos[i].id) {
    //             detalleProducto.push(data.productos[i])
    //             return res.render('product',{
    //                 'producto': detalleProducto
    //             })
    //         }
    //     }
    // }


module.exports = productController