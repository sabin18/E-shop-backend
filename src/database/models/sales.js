'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
  },
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    date: DataTypes.STRING,
    user: DataTypes.UUID,
    business: DataTypes.UUID
  }, {});
  sales.associate = function(models) {
    sales.belongsTo(models.products, {
      as: 'product',
      foreignKey: 'productId',
      targetKey: 'id',
    });
    sales.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'user',
      targetKey: 'id',
    });
    sales.belongsTo(models.business, {
      as: 'MyBusiness',
      foreignKey: 'business',
      targetKey: 'id',
    });
  };
  return sales;
};