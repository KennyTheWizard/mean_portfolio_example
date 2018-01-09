const players = require('../controllers/players')
const questions = require('../controllers/questions')
module.exports = function(app) {

  app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/players', players.show);
  
  app.post('/players', players.create);
  
  app.get('/questions', questions.show);

  app.post('/questions', questions.create);

  app.get('*', (req, res) =>{
    res.redirect('/');
  })
}