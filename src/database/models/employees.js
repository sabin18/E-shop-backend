'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    userId: DataTypes.UUID,
    businessId: DataTypes.UUID
  }, {});
  employees.associate = function(models) {
    // associations can be defined here
  };
  return employees;
};