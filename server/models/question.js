// require mongoose
const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
    prompt: { type: String, required: true, minlength: 15},
    answer: { type: String, required: true},
    wrongAnswerA:  { type: String, required: true},
    wrongAnswerB: { type: String, required: true},
}, {timestamps:true})

const Question = mongoose.model('Question', QuestionSchema);