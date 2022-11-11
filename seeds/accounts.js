const { Account } = require ('../models');

const accountsData = [

    {
        user_id: '1',
        is_checking: 'true',
        is_saving: 'false',
        acc_balance: '100', 
    },
    {
        user_id: '2',
        is_checking: 'true',
        is_saving: 'false',
        acc_balance: '50.00', 
    },
    {
        user_id: '2',
        is_checking: 'false',
        is_saving: 'true',
        acc_balance: '50,000.00', 
    },

    {
        user_id: '3',
        is_checking: 'true',
        is_saving: 'false',
        acc_balance: '200', 
    }      

];

const seedAccounts = () => Account.bulkCreate(accountsData);

module.exports = seedAccounts;