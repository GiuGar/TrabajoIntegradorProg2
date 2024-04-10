let data = require('../db/index');

const profileController = {
    register: function(req, res){
        return res.render('register', {"data": data
        })
    }
}

module.exports = profileController