let data = require('../db/index');

const productController = {
    index: function(req, res){
        return res.render("product", {'data': data
    })
    },
    detalleProducto: function(req,res) {
        let agarraid = req.params.id;
        let productoEncontrado = data.productos.find(producto => producto.id == agarraid);
        
        if (productoEncontrado) {
            res.render('product', {data: {productos: [productoEncontrado]}});
        } else {
            // Renderiza alguna vista de error o mensaje indicando que el producto no se encontró
            res.send('Producto no encontrado');
        }
    }
   
}

module.exports = productController