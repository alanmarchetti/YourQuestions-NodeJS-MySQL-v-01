const Sequelize = require('sequelize');
const connection = require('../database/dbconfig');

const Response = connection.define('responses',{
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Response.sync({ force: false })
.then(() => console.log('Tabela criada'))
.catch((e) => console.log(`Erro ao criar a tabela ${e}`));

module.exports = Response;