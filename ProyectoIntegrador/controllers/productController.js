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
    add: function(req,res) {
        
        return res.render("product-add", {
            productos: data.productos
        })


    }
}

module.exports = productController