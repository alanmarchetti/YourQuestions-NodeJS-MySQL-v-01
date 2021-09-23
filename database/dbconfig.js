const Sequelize = require('sequelize');

const connection = new Sequelize('myquestions', 'root', process.env.PASSWORD_MYSQL, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;