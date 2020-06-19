'use strict';
module.exports = (sequelize, DataTypes) => {
  const businessType = sequelize.define('businessType', {
    name: DataTypes.STRING
  }, {});
  businessType.associate = function(models) {
    // associations can be defined here
  };
  return businessType;
};