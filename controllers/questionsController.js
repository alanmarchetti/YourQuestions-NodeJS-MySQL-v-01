const Question = require('../models/Questions');
const Response = require('../models/Response');

exports.index = ( req, res ) => {
    res.render('question')
};

// salvando as perguntas no banco de dados
exports.question = (req, res) => {
    const { title, description } = req.body;
    Question.create({
        title,
        description
    })
    .then(() => res.redirect('/'))
    .catch((e) => console.log(`Erro ao salvar pergunta ${e}`));
};

exports.onlyQuestion = (req, res) => {
    const id = req.params.id;
    Question.findOne({
        where: { id: id }
    }).then((question) => {
        if(question != undefined) {

            Response.findAll({
                where: { questionID: question.id },
                order:[['id', 'DESC']]        
            })
            .then((response) => {
                res.render('ask',{
                    question,
                    response
                });
            });
            
        }else{
            res.redirect('/');
        }
    });
};

exports.response = ( req, res) => {
    const { body, questionID } = req.body
    Response.create({
        body: body,
        questionID: questionID
    })
    .then(() => res.redirect('/ask/'+questionID))
    .catch((e) => console.log(`Erro ao salvar pergunta ${e}`));
}