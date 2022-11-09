const seedUsers = require('./users');
const seedTransactions = require('./transactions');
const seedAccounts = require('./accounts');

const sequelize = require('../config/connection');



const seedDatabase = async () => {
    await sequelize.sync({ force: true, alter: true});
    await seedUsers();
    await seedAccounts();
    await seedTransactions();
    
    process.exit(0);
    };

seedDatabase();