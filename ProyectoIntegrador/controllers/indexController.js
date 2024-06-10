let data = require('../db/index');

const indexController = {
    index: function(req, res){
        return res.render("index", {'data': data })
    },
    Login: function(req,res){
        return res.render("login", {data:data})
    }
}

module.exports = indexController