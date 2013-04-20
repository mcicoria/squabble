var Game = function(){
    var NumberUtils = require(__dirname + "/../utils/numbers");

    var 
        that = this,
        tiles = [],
        players = [],
        started = false,
        gameover = false;

    that.board = [];

    that.begin = function(){
        _generateBoard();
         started = true;
    };

    var _generateBoard = function(){
        for(var i = 0; i < 7; i++) {
            that.board.push(
                    titles[NumberUtils.randomInt(0,titles.length-1)]
                );
        }
    };

    that.addPlayer = function(player) {
        if(started) return console.log("The game has already started no more players can be added.");
        players.push(player);
    }

    that.getPlayers = function(){
        return players;
    };

    that.removeFromBoard = function(letter) {
        for(var i in that.board) {
            if(that.board[i] == letter) {
                that.board = that.board[i].splice(i,1)
                break;
            }
        }

        if(that.board.length <= 0) {
            gameover = true;
        }

    };  

    that.status = function(){
        if(gameover) return "Game Over";
        if(started) return "Started";
        if(!started) return "Not Started";
    };



    var _genLetters = function() {
        var letters = [];
        var add = function(letter, times) {
            var i = 0
            for (i; i <= times-1; i++) {
                letters.push(letter)
            }
        };

        add({letter:"e", points: 1 }, 12);
        add({letter: "a", points: 1 }, 9);
        add({letter:"i", points: 1 }, 9);
        add({letter:"b", points: 1 }, 9);
        add({letter:"c", points: 1 }, 9);
        add({letter:"d", points: 1 }, 9);
        add({letter:"f", points: 1 }, 9);
        add({letter:"h", points: 1 }, 9);
        add({letter:"i", points: 1 }, 9);
        add({letter:"j", points: 1 }, 9);
        add({letter:"k", points: 1 }, 9);
        add({letter:"l", points: 1 }, 7);
        add({letter:"m", points: 1 }, 7);
        add({letter:"n", points: 1 }, 7);
        add({letter:"o", points: 1 }, 7);
        add({letter:"p", points: 1 }, 7);
        add({letter:"q", points: 1 }, 7);
        add({letter:"r", points: 1 }, 7);
        add({letter:"s", points: 1 }, 5);
        add({letter:"t", points: 1 }, 5);
        add({letter:"u", points: 1 }, 5);
        add({letter:"v", points: 1 }, 5);
        add({letter:"w", points: 1 }, 5);
        add({letter:"x", points: 1 }, 5);
        add({letter:"y", points: 1 }, 5);
        add({letter:"z", points: 1 }, 2);

        return letters;
    };

    titles = _genLetters();

    return that;
};

module.exports = Game;
