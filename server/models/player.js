// require mongoose
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    username: { type: String, required: true},
    score: Number,
}, {timestamps:true})

const Player = mongoose.model('Player', PlayerSchema);