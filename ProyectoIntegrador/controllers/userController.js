let data = require('../db/index');

const userController = {
    register: function(req, res){
        return res.render('register', {"data": data
        })
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