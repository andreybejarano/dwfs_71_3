'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable(
      'orders',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        date: Sequelize.DATE,
        total: Sequelize.DOUBLE,
        status_id: {
          type: Sequelize.INTEGER,
          references: { model: 'status', key: 'id' }
        },
        users_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' }
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('orders');
  }
};
