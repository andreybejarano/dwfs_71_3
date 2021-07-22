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
      'orders_has_products',
      {
        orders_id: {
          type: Sequelize.INTEGER,
          references: { model: 'orders', key: 'id' }
        },
        products_id: {
          type: Sequelize.INTEGER,
          references: { model: 'products', key: 'id' }
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
     await queryInterface.dropTable('orders_has_products');
  }
};
