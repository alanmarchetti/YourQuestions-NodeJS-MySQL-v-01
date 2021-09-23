const Question = require('../models/Questions');

// listando as perguntas do banco de dados
exports.index = ( req, res ) => {
    Question.findAll({ raw: true, order:[
        ['id', 'DESC']
    ]})
    .then(question => {
        res.render('home', {
            question,
        });
    });    
};

// ordenando as perguntas da mais recente para a mais antiga
// ! ordenação feita por ID => order:[['id', 'DESC']]

    