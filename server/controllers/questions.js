const mongoose = require('mongoose');
const Question = mongoose.model('Question');;

module.exports = {
  show: function(req, res) {
    Question.find({}).then((question)=>{
        console.log(question); 
        return res.json(question);
      }).catch((errors)=>{
        console.log(errors);
      });
  },
  create: function(req, res) {
    let question = new Question(req.body);
    console.log(req.body);
    question.save().then((resp) => {
      return res.json(resp);
    }).catch((errors)=>{
      console.log(errors);
      return res.json(errors);
    });
  },
}