const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize('rainbow_kittens_user_data', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;