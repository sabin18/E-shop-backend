'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    userId: DataTypes.UUID,
    businessId: DataTypes.UUID,
    isActive:DataTypes.BOOLEAN
  }, {});
  employees.associate = function(models) {
    employees.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'userId',
      targetKey: 'id',
    });
    employees.belongsTo(models.business, {
      as: 'business',
      foreignKey: 'businessId',
      targetKey: 'id',
    });
  };
  return employees;
};