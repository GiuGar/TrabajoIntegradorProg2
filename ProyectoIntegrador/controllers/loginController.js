let data = require('../db/index');

const loginController = {
    login: function(req,res) {
        res.render("login", {"data": data})
    }

}