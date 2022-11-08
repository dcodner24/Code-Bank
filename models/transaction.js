const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model { }

Transaction.init(
    {
        
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
        // Max length warning around notes box needed
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        timestamp: {
            type: Sequelize.DATE,
            allowNull: false
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'transaction',
    }
);

module.exports = Transaction;