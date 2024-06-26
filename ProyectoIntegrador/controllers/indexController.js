//let data = require('../db/index');
const db = require('../database/models');

//Mostramos los productos de forma descendente
const indexController = {
    productos: function(req,res){
        db.Product.findAll({
            include: [{association: "usuario"}],
            order:[["createdAt","DESC"]],
        })
        .then(function(data){  //Este then agarra el db.Product todos los productos y los pone en data
            res.render("index", {data: data} ) //Nos lleva a index.ejs y lo de la funcion data lo pone en data para usarlo en la vista
        })
        .catch(function(error){
            console.log(error)
        })
    },
}

module.exports = indexController