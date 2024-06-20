const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const { where, Association } = require('sequelize');

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
        const errors = validationResult(req);

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(user) {
            if (!user) {
                return res.render('login', {
                    errors: errors.mapped(),
                    oldData: req.body
                });
            }

            let validPassword = bcryptjs.compareSync(req.body.password, user.password);
            if (!validPassword) {
                return res.render('login', {
                    errors: errors.mapped(),
                    oldData: req.body
                });
            }

            req.session.user = user;
            // console.log("Sesión de usuario configurada:", req.session.user);

            if (req.body.recordarme != undefined) {
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5 });
                console.log("Cookie userId configurada:", res.cookie.userId);
            }
            return res.redirect('/');
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    logout: function(req, res) {
        req.session.destroy(function(err) {
            if (err) {
                console.log(err);
            } else {
                res.clearCookie('userId');
                return res.redirect('/');
            }
        });
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
