module.exports = function(sequelize, dataTypes){

    let alias = "Product" 
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        imagen_producto: {
            type: dataTypes.STRING,
        },
        nombre_produdcto: {
            type: dataTypes.STRING,
        },
        descripcion_producto: {
            type: dataTypes.STRING,
        },
        /* createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        } */
        
    }

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true, 
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as: 'productoCreado',
            foreignKey: 'id_usuario',
            timestamps: true,
        }) ;
        Product.hasMany(models.Comment, {
            as: 'comentarios',
            foreignKey: 'id_producto',
            timestamps: true,
        }) ;
    }

    return Product;

}