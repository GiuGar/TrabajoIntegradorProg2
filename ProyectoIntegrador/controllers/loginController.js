const db = require("../database/models")


const {validationResult} = require("express-validator")

let loginController = {
   
        index: function(req, res){
            return res.render("index", {'data': data })
        },
        Login: function(req,res){

            const resultValidation = validationResult(req)
            if(!resultValidation.isEmpty()){
                return res.render("login", {
                    errors: resultValidation.mapped(),
                oldData : req.bodyn })
            }



            return res.render("login", {data:data})
        }
    }
