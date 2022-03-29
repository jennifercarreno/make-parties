'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Events', 'imgUrl', { type: Sequelize.Text });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Events', 'imgUrl');
  }
};