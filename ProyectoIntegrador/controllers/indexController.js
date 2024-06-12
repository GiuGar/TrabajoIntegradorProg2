let data = require('../db/index');
const db = require('../database/models');

const indexController = {
    productos: function(req,res){
        db.Product.findAll()
        .then(function(data){
            res.render("index", {data: data} )
        })
        .catch(function(error){
            console.log(error)
        })
    },
    Login: function(req,res){
        return res.render("login", {data:data})
    }
}

module.exports = indexController