const User = require('./user');
const Account = require('./account');
const Transaction = require('./transaction');

User.hasMany(Account, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Account.belongsTo(User, {
  foreignKey: 'user_id'
});

Account.hasMany(Transaction, {
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

Transaction.belongsTo(Account, {
    foreignKey: 'account_id'
});

module.exports = { User, Account, Transaction };