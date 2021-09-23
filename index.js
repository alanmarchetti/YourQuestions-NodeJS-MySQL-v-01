require('dotenv').config();
const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const app = express();
const connection = require('./database/dbconfig');
const QuestionModel = require('./models/Questions');
const ResponseModel = require('./models/Response')

// conectando ao mysql
connection.authenticate()
.then(()=>console.log('conexão com o banco'))
.catch((err) => console.log(`erro ${err}`))

// configurando arquivos estáticos no expres
app.use(express.static(path.join(__dirname, 'public')));

// configuração do ejs com o express
app.set('view engine', 'ejs');

// configuração para requisições do tipo post
app.use(express.urlencoded({ extended: true }));

// rotas da aplicação
app.use('/', userRoutes);

// definindo a porta padrão
const PORTA = process.env.PORTA || 3003

// iniciando o servidor
app.listen(PORTA, (error) => {
    if(!error)return console.log(`Servidor iniciado ${PORTA}`);
    return console.log('Erro ao iniciar o servidor')
});