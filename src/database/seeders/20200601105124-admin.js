'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id :'b936e941-0647-4a2d-ab61-ec470e86227c',
      firstName: 'John',
      lastName: 'Doe',
      email: 'admin@gmail.com',
      password:'$2b$10$VyldWKIyiuVSqZYjmz4u8OepsFJFKzQipOQzhrhQKthgn8a9OI2Au',
      role:'admin',
      businessId:1,
      isVerified: true,
      image:'',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
