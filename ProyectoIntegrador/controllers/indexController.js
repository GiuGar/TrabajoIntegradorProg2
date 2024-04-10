let data = require('../db/index');

const indexController = {
    index: function(req, res){
        return res.render("index", {'data': data
    })
    },

    detalleProducto: function (req, res) {
        let idEnviado = req.params.id
        let detalleProducto = []
        for (let i = 0; i < data.productos.length; i++) {
            if (idEnviado == data.productos[i].id) {
                detalleProducto.push(data.productos[i])
                return res.render('product',{
                    index: detalleProducto
                })
            }
        }
    }
}

module.exports = indexController