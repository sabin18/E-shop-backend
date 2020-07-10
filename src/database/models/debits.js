'use strict';
module.exports = (sequelize, DataTypes) => {
  const debits = sequelize.define('debits', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    user: DataTypes.UUID,
    business: DataTypes.UUID
  }, {});
  debits.associate = function(models) {
    debits.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'user',
      targetKey: 'id',
    });
    debits.belongsTo(models.business, {
      as: 'businesses',
      foreignKey: 'business',
      targetKey: 'id',
    });
  };
  return debits;
};