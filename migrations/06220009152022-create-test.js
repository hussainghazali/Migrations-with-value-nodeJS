module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('tests', {
        id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
        name: { type: Sequelize.STRING },
        code: { type: Sequelize.STRING },
        imageUrl: { type: Sequelize.STRING },
        groupId: { type: Sequelize.INTEGER, allowNull: true },
        createdAt: { type: Sequelize.DATE, allowNull: true },
        updatedAt: { type: Sequelize.DATE, allowNull: true },
      })
      .then(() => {
        queryInterface.bulkInsert('tests', [
          {
            id: 1,
            name: 'Test One',
            code: 'TC',
            imageUrl: 'https://google.com',
            groupId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Test One',
            code: 'SCC',
            imageUrl: 'https://google.com',
            groupId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'Test One',
            code: 'CM',
            imageUrl: 'https://google.com',
            groupId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            name: 'Test One',
            code: 'UM',
            imageUrl: 'https://google.com',
            groupId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            name: 'Test One',
            code: 'DDM',
            imageUrl: 'https://google.com',
            groupId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 6,
            name: 'Test One',
            code: '',
            imageUrl: 'https://google.com',
            groupId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 7,
            name: 'Test One',
            code: '',
            imageUrl: 'https://google.com',
            groupId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tests');
  },
};
