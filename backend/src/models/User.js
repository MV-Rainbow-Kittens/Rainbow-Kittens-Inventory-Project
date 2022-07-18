const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    profile_pic: Sequelize.STRING,
    location: Sequelize.STRING,
    avatar: Sequelize.STRING,
    projects: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('projects').split(';')
        },
        set(val) {
            this.setDataValue('projects' , val.join(';'));
        }
    }
});

module.exports = User;