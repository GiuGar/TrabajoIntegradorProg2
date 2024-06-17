module.exports = function(sequelize, DataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        imagen_producto: {
            type: DataTypes.STRING
        },
        nombre_producto: {
            type: DataTypes.STRING
        },
        descripcion_producto: {
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
        tableName: "productos",
        timestamps: false,
        underscored: false
    };

    const Product = sequelize.define(alias, cols, config);

    //Aca hacemos la relacion 
    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: 'usuario', //Asi llamo a la relacion en el controlador
            foreignKey: 'id_usuario'
        });
        Product.hasMany(models.Comment, {
            as: 'comentarios',//Asi llamo a la relacion en el controlador
            foreignKey: 'id_producto'
        });
    };

    return Product;
};