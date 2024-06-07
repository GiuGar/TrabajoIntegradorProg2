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
        contraseña: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto_perfil: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    const User = sequelize.define(alias,cols,config)
    return User;
}

