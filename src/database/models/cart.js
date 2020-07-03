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
    // associations can be defined here
  };
  return cart;
};