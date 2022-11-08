const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model { }

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
                key: 'username',
            },
        },
        // Max length warning around notes box needed
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'account',
                key: 'acc_balance'
             },

        timestamp: {
            type: Sequelize.DATE,
            allowNull: false
        },
    }},

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'transaction',
    }
);

module.exports = Transaction;