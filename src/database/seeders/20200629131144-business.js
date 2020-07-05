'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('businesses', [{
      id:'d08a096f-6536-4507-aeca-f18f8234129f',
      name: 'xct',
      businessTypes: 2,
      owner: '6d4a21d6-f16b-4c26-9db0-acd29bdd4d20',
      payment:'8b545b39-af81-4c69-8802-dc2efd24b974',
      isPaid:true, 
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('businesses', null, {});
  }
};
