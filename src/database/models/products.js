'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    business: DataTypes.UUID,
    price: DataTypes.INTEGER,
    isQuantitify: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER,
    expiryDate: DataTypes.DATE
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};