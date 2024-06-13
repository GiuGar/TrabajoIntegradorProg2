let data = require('../db/index');
const db = require('../database/models');
const productos = db.Product
//Mostramos los productos de forma descendente
const indexController = {
    productos: function(req,res){
        db.Product.findAll({
            order:[
                ["createdAt","DESC"]
            ],
            limit: 10
        })
        .then(function(data){
        
            res.render("index", {data: data} ) //Nos vamos a la vista de index y usamos data que es la que tiene la db
        })
        .catch(function(error){
            console.log(error)
        })
    },
    Login: function(req,res){
        return res.render("login", {data:data})
    }
}
console.log(this.productos)
module.exports = indexController