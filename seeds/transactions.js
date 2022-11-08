const { Transaction } = require ('../models');

const transactionData = [


]

const seedTransactions = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransactions;