let data = require('../db/index');

const userController = {
    index: function(req, res){
        return res.render('profile', {"data": data
        })
    },
    register: function(req, res){
        return res.render('register', {"data": data
        })
    },
    login: function(req, res){
        return res.render('login', {"data": data
        })
    }
    
}

module.exports = userController