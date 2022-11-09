const { User } = require ('../models');

const userData = [
    {
        username: 'Tony',
        email: 'tony@tony.com',
        password: 'password',
        dateOfBirth: '3/6/90',
    },
    {
        username: 'David',
        email: 'david@david.com',
        password: 'password123',
        dateOfBirth: '11/27/01',
    },
    {
        username: 'Michael',
        email: 'mike@mike.com',
        password: 'password456',
        dateOfBirth: '11/11/20',
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;