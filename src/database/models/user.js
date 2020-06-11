'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
  },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('admin', 'owner', 'cashier', 'manager'),
      allowNull: false
    },
    businessId: DataTypes.INTEGER,
    isVerified: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // Association goes here
  };
  return User;
};