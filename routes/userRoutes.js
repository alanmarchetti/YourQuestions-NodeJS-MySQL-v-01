const router = require('express').Router();
const homeController = require('../controllers/homeController');
const questionsController = require('../controllers/questionsController');

// home
router.get('/', homeController.index);

// questions
router.get('/question', questionsController.index);
router.get('/ask/:id', questionsController.onlyQuestion);
router.post('/savedquestion', questionsController.question);
router.post('/response', questionsController.response);

module.exports = router;