'use strict';
module.exports = (sequelize, DataTypes) => {
  const expenses = sequelize.define('expenses', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    user: DataTypes.UUID,
    business: DataTypes.UUID
  }, {});
  expenses.associate = function(models) {
    expenses.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'user',
      targetKey: 'id',
    });
    expenses.belongsTo(models.business, {
      as: 'businesses',
      foreignKey: 'business',
      targetKey: 'id',
    });
  };
  return expenses;
};