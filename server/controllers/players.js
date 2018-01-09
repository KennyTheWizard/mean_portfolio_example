const mongoose = require('mongoose');
const Player = mongoose.model('Player');;

module.exports = {
  show: function(req, res) {
    Player.find({}).then((player)=>{
        console.log(player); 
        return res.json(player);
      }).catch((errors)=>{
        console.log(errors);
      });
  },
  create: function(req, res) {
    let player = new Player(req.body);
    console.log(req.body);
    player.save().then((resp) => {
      return res.json(resp);
    }).catch((errors)=>{
      console.log(errors);
      return res.json(errors);
    });
  },
}