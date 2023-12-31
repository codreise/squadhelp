const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Select extends Model {
    static associate(models) {}
  }
  Select.init(
    {
      type: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      describe: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'Select',
      tableName: 'selects',
    },
  );

  return Select;
};