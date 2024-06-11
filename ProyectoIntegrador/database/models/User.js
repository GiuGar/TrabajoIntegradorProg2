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
        email: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.STRING
        },
        foto_perfil: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_usuario"
        });
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "id_usuario"
        });
    };

    return User;
};
