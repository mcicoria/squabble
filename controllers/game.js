var Game = function(){
    var Game = require(__dirname + "/../models/game");

    var _playWord = function(req, res, next) {

        var 
            word = req.param("word"),
            game = req.param("game"),
            player = 0 || req.param("player");

        if(!word || !game) {
            return res.send({
                played: false
            })
        }

        Game.getGame(game, function(err, game) {
            if(players[player].playWord(word, game)) {
                return res.send({
                    played: true
                });
            } 

            res.send({
                played: false
            });
        });
    };

    return {
        playWord: _playWord
    };

}();

module.exports = Game;