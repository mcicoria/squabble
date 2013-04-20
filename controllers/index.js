var Index = function(){
    var mu = require("mu2");
    var Game = require(__dirname + "/../models/game");
    var Player = require(__dirname + "/../models/player");

    mu.root = __dirname + '/../views';

    var _home = function(req, res, next) {
        var game = new Game();

        game.addPlayer(new Player({name: "John", id: 1}));
        game.addPlayer(new Player({name: "Gorge", id: 2}));
        game.begin();

        var players = game.getPlayers();

        

        players[0].playWord("cats", game);
        players[1].playWord("hats", game);


        var stream = mu.compileAndRender('index.mu', {
            title: "Squabble",
            board: [{letter:"c", points: 1}, {letter:"a", points:2}, {letter:"t", points:2}, {letter:"s", points:2}, {letter:"h", points:2}, {letter:"a", points:2}, {letter:"t", points:2}],
            players: game.getPlayers()
        });

        stream.pipe(res)    
    };

    return {
        home: _home
    };

}();

module.exports = Index;