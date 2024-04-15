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
            productos: data.productos // Pasar los productos como detalleprofile
        })
    }, 

    editarPerfil: function(req, res){
        return res.render('profile-edit', {
            usuario: data.usuario
        })
    }
}

module.exports = userController