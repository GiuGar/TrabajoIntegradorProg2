let data = require('../db/index');
const db = require('../database/models')
const bcryptjs = require("bcryptjs")


const userController = {
    register: function(req, res){
        return res.render('register', {"data": data
        })
    },

    store: function (req, res) {
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
           console.log("errors:", JSON.stringify(resultValidation,null,4));
           return res.render("register", { 
               errors: resultValidation.mapped(),
               oldData: req.body
            })
       } else {
    
       const usuario = {
           usuario: req.body.nombre,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 10), 
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
    }
};

module.exports = userController