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

            let foto
            if (req.body.imagen){
                foto = req.body.imagen
            } else {
                foto = "perfil.jpg"
            }
            
            const usuario = {
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10), 
                fecha: req.body.nacimiento,
                dni: req.body.dni,
                foto_perfil: `/images/users/${foto}`,
            };
            
            db.User.create(usuario)
            .then(function(user) {
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
            email: req.body.email, //esto nos trae el usuario q se logueo con ese mail
            
        }],
        })
        .then(function(user){ //Esta funcion nos devuelve el resultado de where
            //console.log('PASSWORD : ', user.password);
            //Recibe la password q puso el usuario en el formulario, y el 2 parametro es el "name" del form
            let ValidPassword= bcryptjs.compareSync(req.body.password, user.password) 
            console.log('validPassword:', ValidPassword)
            //Guardar al usuario en session
            req.session.user = user
            console.log('user en session:', user)

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

    logout: function(req,res){ //destruimos session y cookie pq sino la cookie me la vuelve a crear
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
        res.clearCookie("userId")
        
        //redireccionar a home
        res.redirect('/');
    
    },

    profile: function(req, res) {
        const idUsuario = req.params.id
        
        db.User.findByPk(idUsuario, {
            include: [{association: "productos"}],
            order: [[{model: db.Product, as: 'productos'},'createdAt', 'DESC']]
        })

        .then(function(data) {
            return res.render('profile', { data: data });
        })
        
        .catch(function(error) {
            console.log(error);
        });
    },

    edit: function(req, res) {
        db.User.findByPk(req.params.id, {
            include: [{association: "productos"}]  
        })
        .then(function(usuario){
            if ((req.session.user != undefined) && (usuario == req.session.user)) {
                // console.log("Usuario:", usuario);
                res.render('editProfile', {usuario: usuario});
            } else {
                res.redirect('/user/login');  // Si no encuentra el usuario, redirige a register
            }
        })
        .catch(function(error){
            console.log(error);
        });
    },

    editedProfile: function(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            db.User.findByPk(req.params.id, {
                include: [{association: "productos"}]  
            })
            .then(function(usuario){
                return res.render("editProfile", { 
                    errors: errors.mapped(),
                    oldData: req.body,
                    usuario: usuario
                })
            })
            .catch(function(error){
                console.log(error);
            });

        } else {

            db.User.findByPk(req.params.id, {
                include: [{association: "productos"}]  
            })
            .then(function(usuario){
                const contra = req.body.password ? bcryptjs.hashSync(req.body.password, 10) : usuario.password
                
                db.User.update({
                    usuario: req.body.usuario,
                    email: req.body.email,
                    password: contra,
                    fecha: req.body.nacimiento,
                    dni: req.body.dni,
                }, 
                    { where: { id: req.params.id } })
                    
                .then(function(user){
                    res.redirect(`/user/profile/id/${req.params.id}`);
                })
            })
            .catch(function(error){
                console.log(error);
            });
        }
    },
    
};

module.exports = userController;
