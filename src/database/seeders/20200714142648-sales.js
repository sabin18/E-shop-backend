'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('sales', [{
        id:'a2ebd737-9faf-4996-b75c-f84db8e8fed7',
        productId:1,
        quantity:1,
        user:'6d4a21d6-f16b-4c26-9db0-acd29bdd4d20',
        business:'d08a096f-6536-4507-aeca-f18f8234129f',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('sales', null, {});
  }
};
