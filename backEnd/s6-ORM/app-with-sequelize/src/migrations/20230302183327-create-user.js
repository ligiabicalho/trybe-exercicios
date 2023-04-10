// npx sequelize migration:generate --name create-user
// Para rodar: npx sequelize db:migrate
// Para modificar a tabela, por exemplo acrescentando uma nova coluna, devemos criar uma nova migration, ex:
// npx sequelize migration:generate --name add-column-phone-table-users
// o queryInterface abstrai o que a função ALTER TABLE faz no SQL

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
