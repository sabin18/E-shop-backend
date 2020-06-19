'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('businessTypes', [{
      id:1,
      name: 'ownerBusiness',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      name: 'Small Shop',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:3,
      name: 'Big shop',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:4,
      name: 'Restaurant',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:5,
      name: 'Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
