let data = require('../db/index');
const db = require('../database/models')
const {validationResult} = require("express-validator")
const bcryptjs = require("bcryptjs")


const userController = {
    register: function(req, res){
        return res.render('register', {"data": data
        })
    },

    store: function (req, res) {
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
           console.log("errors:", JSON.stringify(errors,null,4));
           return res.render("register", { 
               errors: errors.mapped(),
               oldData: req.body
            })
       } else {
    
       const usuario = {
           usuario: req.body.usuario,
           email: req.body.email,
           password: bcryptjs.hashSync(req.body.password, 10), 
           fecha: req.body.nacimiento,
           dni: req.body.dni,
           foto_perfil: req.body.imagen,
       };
       
       db.User
           .create(usuario)
           .then(function (user) {
               return res.redirect("/user/login");
           })
           .catch(function (error) {
               console.log("Error al guardar el usuario", error);
           });
       }
    },
    
    login: function(req, res){
        return res.render('login', {"data": data
        })
    },

    profile: function(req, res){
        return res.render('profile', {
            productos: data.productos,
            usuario: data.usuario
        });
    },
    profileEdit: function(req, res){
        return res.render('profile-edit', {
            productos: data.productos,
            usuario: data.usuario
        });
    },
    prueba: function(req,res){
        db.User.findAll()
        .then(function(data){
          console.log('datos de producto:', JSON.stringify(data, null, 4));
          res.send(data)
        })
        .catch(function(e){
          console.log(e);
        })
}
};

module.exports = userController