'use strict';
module.exports = (sequelize, DataTypes) => {
  const credits = sequelize.define('credits', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    user: DataTypes.UUID,
    business: DataTypes.UUID
  }, {});
  credits.associate = function(models) {
    credits.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'user',
      targetKey: 'id',
    });
    credits.belongsTo(models.business, {
      as: 'businesses',
      foreignKey: 'business',
      targetKey: 'id',
    });
  };
  return credits;
};