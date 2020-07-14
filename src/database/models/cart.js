'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    ip: DataTypes.STRING,
    user: DataTypes.UUID,
    business: DataTypes.UUID
  }, {});
  cart.associate = function(models) {
    cart.belongsTo(models.products, {
      as: 'product',
      foreignKey: 'productId',
      targetKey: 'id',
    });
    cart.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'user',
      targetKey: 'id',
    });
    cart.belongsTo(models.business, {
      as: 'MyBusiness',
      foreignKey: 'business',
      targetKey: 'id',
    });
  };
  return cart;
};