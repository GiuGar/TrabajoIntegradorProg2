const { sequelize } = require(".");

module.exports= function(sequelize,dataTypes){
    let alias= "Comment";
    let cols = {
        id:{
            autoIncrement : true,
            primaryKey: true,
            type: dataTypes.DECIMAL //Porque va del 1 al 20
        },
        id_usuario:{
            type: dataTypes.INTEGER
        },
        id_producto:{
            type: dataTypes.INTEGER
        },
        texto_comentario:{
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type:dataTypes.DATE
        }

    }
    let config = {
        tableName: "comentarios", //Agrego el nombre de la tabla
        timestamps: false, //Coma pq son objetos literales
        underscorded: true// Por si algun nombre tiene guion bajo
    }


let Comment = sequelize.define(alias,cols,config);
    return Comment; // es una variable que va a

}
//Utilizo la variable Comment pq ya sequelize 
Comment.associate = function(models){
    Comment.belongsTo(models.User,{
        as: "usuario", //Este alaias es el q usaremos en el controlador
        foreignKey: "id_usuario"// Calve foranea que relaciona a ambas tablas
    })
}

Comment.associate = function(models){
    Comment.belongsTo(models.Product,{
        as: "producto",
        foreignKey: "id_producto"
    })
}