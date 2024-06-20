const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const session = require('express-session');


const userController = {
    register: function(req, res) {
        return res.render('register');
    },

    store: function(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("errors:", JSON.stringify(errors, null, 4));
            return res.render("register", { 
                errors: errors.mapped(),
                oldData: req.body
            });
        } else {
            const usuario = {
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10), 
                fecha: req.body.nacimiento,
                dni: req.body.dni,
                foto_perfil: req.body.imagen,
            };
            
            db.User.create(usuario)
            .then(function(user) {
                req.session.user = user; // Guarda el usuario completo en la sesión
                // console.log("Sesión de usuario configurada:", req.session.user);
                return res.redirect("/user/login");
            })
            .catch(function(error) {
                console.log("Error al guardar el usuario", error);
            });
        }
    },

    login: function(req, res) {
        if (!req.session.user) {
            return res.render('login');
        } else {
            return res.redirect('/');
        }
    },

    loginStore: function(req, res) {

        //Obtenemos los resultados de las validaciones
        const resultValidation = validationResult(req)
        //Preguntamos si hay errores y que nos mande al login-validator
        if(!resultValidation.isEmpty()){
            return res.render('login', {
                        errors: resultValidation.mapped(),  
                        oldData:req.body 
                    })
                }else{ //Si no hay errores pasa a todo lo demas
                    
                 // Buscar el usuario que se quiere loguear.
       db.User.findOne({  //este User es el alias 
        where:[{
            email:req.body.email, //esto nos trae el usuario q se logueo con ese mail
            
        }],
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
            res.cookie('userId', user.id, {maxAge: 1000 * 60 * 5})
        }
        return res.redirect('/')
        //Para ver la cookie tenemos que ir a inspeccionar en google y a cookies
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    },

    logout: function(req,res){ 
    
    },

    profile: function(req, res) {

        const id = req.session.user.id;
        db.User.findByPk(id, {
            include: [
                { association: "productos" },
            ],
            order: [
                []
            ]
        })
        .then(function(data) {
            return res.render('profile', { data: data });
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    profileEdit: function(req, res) {
        const idUser = req.session.user.id;
        db.User.findByPk(idUser)
        .then(function(user) {
            return res.render('profile-edit', { user: user });
        })
        .catch(function(error) {
            console.log(error);
        });
    },
};

module.exports = userController;
