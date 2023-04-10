// Para modificar a tabela, por exemplo acrescentando uma nova coluna, devemos criar uma nova migration, ex:
// npx sequelize migration:generate --name add-column-phone-table-users
// Atualizar tb o user.model!!
// Para rodar: npx sequelize db:migrate

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phoneNum', {
     type: Sequelize.STRING,
    });
    // Como colocar numa posição específica??
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};
