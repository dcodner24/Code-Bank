const { Transaction } = require ('../models');

const transactionData = [
    {
        notes: 'For last bootcamp payment',
        amount: '4000',
        account_id: 1
    },
    {
        notes: 'For last bootcamp payment',
        amount: '4000',
        account_id: 3
    },
    {
        notes: 'For last bootcamp payment',
        amount: '4000',
        account_id: 2
    },
    {
        notes: 'Groceries',
        amount: '500',
        account_id: 1
    },


]

const seedTransactions = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransactions;