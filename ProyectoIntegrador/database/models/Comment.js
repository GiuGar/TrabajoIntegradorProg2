const { usuarios } = require("../../db");

module.exports = function(sequelize, DataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER // Cambiado a INTEGER
        },
        id_usuario: {
            type: DataTypes.INTEGER
        },
        id_producto: {
            type: DataTypes.INTEGER
        },
        texto_comentario: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "comentarios", // Nombre de la tabla
        timestamps: true, // Habilitar timestamps
        underscored: false // Cuando hay guion bajo
    };

    let Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: "usuario", // Alias utilizado en el controlador
            foreignKey: "id_usuario", // Clave foránea
            timestamps: false,
        });
        Comment.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "id_producto",
            timestamps: false,
        });
    };

    return Comment
}

