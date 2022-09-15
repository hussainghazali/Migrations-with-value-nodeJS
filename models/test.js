module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define(
    'test',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      code: DataTypes.STRING ,
      imageUrl: DataTypes.STRING ,
      groupId: {
        type:DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'tests',
    }
  );
  testType.associate = function (models) {

    test.hasMany(models.test, {
      as: 'tests',
      foreignKey: 'groupId',
    });
  };
  return test;
};
