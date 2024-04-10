let data = require('../db/index');

const loginController = {
    index: function(req, res){
        return res.render("login")
    }
}

module.exports = loginController