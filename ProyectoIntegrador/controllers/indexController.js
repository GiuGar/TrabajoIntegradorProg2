//let data = require('../db/index');
const db = require('../database/models');

//Mostramos los productos de forma descendente
const indexController = {
    productos: function(req,res){
        db.Product.findAll({
            order:[
                ["createdAt","DESC"]
            ],
            limit: 10
        })
        .then(function(data){  //Este then agarra el db.Product todos los productos y los pone en data
            res.render("index", {data: data} ) //Nos lleva a index.ejs y lo de la funcion data lo pone en data para usarlo en la vista
        })
        .catch(function(error){
            console.log(error)
        })
    },
    login: function(req,res){
        return res.render("login", {data:data})
    }
}
console.log(this.productos)
module.exports = indexController