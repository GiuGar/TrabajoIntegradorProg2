const db = require('../database/models')
const {validationResult} = require("express-validator")
const bcryptjs = require("bcryptjs");
const session = require('express-session');
const { where } = require('sequelize');


const userController = {
    register: function(req, res){
        return res.render('register')
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
       req.session.user = usuario
           
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
        if (!req.session.user){
            return res.render('login')
        } else {
            return res.redirect('/')
        }
        
    },
    
    loginStore:function (req, res) { 
        // const errors = validationResult(req);

        // if(!errors.isEmpty()){
        //     console.log("errors:", JSON.stringify(errors,null,4))
        //     return res.render("login", { 
        //        errors: errors.mapped(),
        //        oldData: req.body
        //     })
        // } else {
        //     db.User.findOne({
        //         //Nos trae un usuario que se logueó
        //         where: {
        //             //El email es el mismo email que ingreso el usuario
        //             email: req.body.email 
        //         }

        db.User.findOne({
            where:[{
                email: req.body.email,
            }]
        })
        .then(function(user){ //Esta funcion nos devuelve el resultado de where
            //Recibe la password q puso el usuario en el formulario, y el 2 parametro es el "name" del form
            let ValidPassword= bcryptjs.compareSync(req.body.password,user.password) 
            console.log('validPassword:',ValidPassword)
            //Guardar al usuario en session
            req.session.user = user
            console.log('user en session:',req.session.user)
            
             //Si apreta recordarme que haga las cookies (utilizamos el "name" del formulario)
        if(req.body.recordarme != undefined){
            //El 1 parametro es el nombre que queremos guardar en este caso 'userId'
            //(Lo sacamos del app.js cookies )
            //El 2 accedemos al id del usuario de la promesa
            //El 3 es el tiempo
            res.cookie('userId', user.id, {maxAge: 100 * 60 * 5})
        }
        return res.redirect('/')
        //Para ver la cookie tenemos que ir a inspeccionar en google y a cookies

        })
        .catch(function(error){
            console.log(error)
        })
       

    },

      // ACA VA LOGOUT
  logout: function (req, res) {
   
  },
  
    profile: function(req, res){
        return res.render('profile', {
            productos: data.productos,
            usuario: data.usuario
        });
    },

    profileEdit: function(req, res){
        
        const idUser = req.session.user.dni
        db.User.findPk(idUser)
        .then(function(user){

        })
    },


};

module.exports = userController