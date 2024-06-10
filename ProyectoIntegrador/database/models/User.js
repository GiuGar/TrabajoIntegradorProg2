module.exports = function(sequelize,dataTypes){
    let alias = "User"
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        createdAt : {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: false
    }

    const User = sequelize.define(alias,cols,config)

    User.associate = function(models){ //definimos una funcion en la propiedad .associate de nuestra variable que representa el modelo (User)
       User.hasMany(models.Product, {
        as: "productos", //segundo parametro en el que detallamos la relacion
        foreignKey: "id_producto"
       });
       User.hasMany(models.Comment, {
        as: "commentarios",
        foreignKey: "id_usuario"
       })
    }

    return User;
}

