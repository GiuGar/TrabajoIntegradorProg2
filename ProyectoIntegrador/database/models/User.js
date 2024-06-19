module.exports = function(sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        },
        usuario: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.INTEGER
        },
        foto_perfil: {
            type: DataTypes.STRING
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "productos", //alias de como llamo a la relacion en el controller
            foreignKey: "id_usuario"
        });
        User.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "id_usuario"
        });
    };

    return User;
};
