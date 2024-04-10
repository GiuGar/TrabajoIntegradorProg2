let data = require('../db/index');

const productController = {
    index: function(req, res){
        return res.render("product", {'data': data
    })
    }
}

module.exports = productController