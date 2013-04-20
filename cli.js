var Game = require(__dirname + "/models/game");
var Player = require(__dirname + "/models/player");

var game = new Game();

game.addPlayer(new Player({name: "John", id: 1}));
game.addPlayer(new Player({name: "Gorge", id: 2}));
game.begin();

var players = game.getPlayers();

console.log(game.board);

var 
    readline = require('readline');


var rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    console.log("Played:", players[0].playWord(line, game));
    console.log(game.board);
});

