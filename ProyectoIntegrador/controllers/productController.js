let data = require('../db/index');

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

        return res.render("search-results", {datoBuscado: buscar})
    },
    productoAdd: function(req,res) {
        return res.render("productadd", { 'data': data

    })
}
}

module.exports = productController