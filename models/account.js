const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {}

Account.init(
  {
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    is_checking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    is_savings: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    acc_balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'account',
  }
);

module.exports = Account;