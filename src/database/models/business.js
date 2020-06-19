'use strict';
module.exports = (sequelize, DataTypes) => {
  const business = sequelize.define('business', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
  },
    name: DataTypes.STRING,
    businessTypes: DataTypes.INTEGER,
    owner: DataTypes.UUID,
    payment: DataTypes.UUID,
    isPaid: DataTypes.BOOLEAN
  }, {});
  business.associate = function(models) {
    // associations can be defined here
  };
  return business;
};