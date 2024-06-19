// let data = require('../db/index');
const db = require('../database/models')
const {validationResult} = require("express-validator")
const bcryptjs = require("bcryptjs");
const session = require('express-session');


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
        return res.render('login')
    },
    
    loginStore:function (req, res) { 
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            console.log("errors:", JSON.stringify(errors,null,4))
            return res.render("login", { 
               errors: errors.mapped(),
               oldData: req.body
            })
        } else {
            db.User.findOne({
                //Nos trae un usuario que se logueó
                where: {
                    //El email es el mismo email que ingreso el usuario
                    email: req.body.email 
                }
            })
            .then(function(user){
                req.session.user = user;
                if(req.body.checkbox != undefined){
                    res.cookie('userId',user.id,{maxAge: 1000 * 60 * 5})
                    console.log(res.cookie.userId)
                }
                return res.redirect("/");
            })
            .catch(function(error){
                console.log(error)
            })

        }


            
        
        // if (!errors.isEmpty()) {
        //     // Si hay errores, volvemos al login y mapeamos los errores
        //     return res.render("login", {
        //         errors: errors.mapped(),
        //         oldData: req.body
        //     });
        // } else {
        //     const { usuario, password } = req.body;
        //      const user = db.User.findOne({ where: { usuario } }); // Agregamos await para la búsqueda asincrónica
        //         if (!user) {
        //             return res.render('login', {
        //                 error: 'Usuario no encontrado',
        //                 oldData: req.body
        //             });
        //         }

        //         const isPasswordValid = bcryptjs.compareSync(password, user.password);
        //         if (!isPasswordValid) {
        //             return res.render('login', {
        //                 error: 'Contraseña incorrecta',
        //                 oldData: req.body
        //             });
        //         }

        //         // Guardar el usuario en la sesión
        //         req.session.user = user;

        //         // Si el usuario seleccionó "recordar", establecer una cookie de larga duración
        //         if (req.body.remember) {
        //             res.cookie('userId', user.id, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30 días
        //         }

        //         // Redirigir al usuario a la página principal
        //         return res.redirect("/");
        //     } catch (error) {
        //         console.log("Error al iniciar sesión:", error);
        //         return res.render('login', {
        //             error: 'Ocurrió un error. Por favor, intenta de nuevo.',
        //             oldData: req.body
        //         });
        //     }
        // }
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
//     prueba: function(req,res){
//         db.User.findAll()
//         .then(function(data){
//           console.log('datos de producto:', JSON.stringify(data, null, 4));
//           res.send(data)
//         })
//         .catch(function(e){
//           console.log(e);
//         })
// }
};

module.exports = userController