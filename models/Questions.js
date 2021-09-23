const Sequelize = require('sequelize');
const connection = require('../database/dbconfig');

const Question = connection.define('questions',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({ force: false })
.then(() => console.log('Tabela criada'))
.catch((e) => console.log(`Erro ao criar a tabela ${e}`));

module.exports = Question;