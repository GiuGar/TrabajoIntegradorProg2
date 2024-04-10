let data = require('../db/index');

const productController = {
    index: function(req, res){
        return res.render("product", {'data': data
    })
    },
    
    detalleProducto: function (req, res) {
        let idEnviado = req.params.id
        for (let i = 0; i < data.productos.length; i++) {
            if (idEnviado == data.productos[i].id) {
                return res.render('product',{
                    'producto': data.productos[i]
                })
            }
        }
    }
}

module.exports = productController