const sequelize = require('../config/connection');
const { User, Account, Transaction } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await User.create({

    });

    await Account.create({

    });

    await Transaction.create({

    });
    process.exit(0);
};

seedDatabase();