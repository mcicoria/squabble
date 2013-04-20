var Player = function(data){
    
    var Word = require(__dirname + "/word");
    var NumberUtils = require(__dirname + "/../utils/numbers");
    var COLORS = ["#ffd706" , "#4a8bd5" , "#d54a9c"];

    var 
        that = this;

    that.id = data.id;
    that.name = data.name || "Player 1";
    that.board = [];

    that.color = COLORS[NumberUtils.randomInt(0,2)];

    that.playWord = function(word, game){
        if(!Word.isWord(word)) return false;
        var steals = [], playedSteals = [];

        for(var i in game.players) {
            if(game.players[i].id == that.id) continue;
            steals.concat(game.players[i].board);
        }

        var originalWord = word;

        for(var i in steals){

            if(!_isWordWithin(steals[i], originalWord)) continue;

            for(var c in steals[i]) {
                originalWord = _strRemove(originalWord, originalWord.indexOf(steals[i][c]));
            }

            playedSteals.push(steals[i]);

            if(originalWord.length <= 0) break; //TODO: commit here
        }

        var boardLetters = [];
        for(var i in game.board) {
            originalWord = _strRemove(originalWord, originalWord.indexOf(game.board[i]));
            boardLetters(game.board[i]);
        }

        if(originalWord.length <= 0) return _commitPlay(word, game, playedSteals, boardLetters);

        return false;


        /*
            Check if other players words fit witin the word played
            And the word is possible with letters from the board
                If all that is so, then we shall commit the move
                if not then forget it 
         */
    
    };

    that.removeWord = function(word) {
        for(var i in board) {
            if(board[i] == word){
                board[i].splice(i,1);
                return true;
            }
        }
        return false;

    };


    var _commitPlay = function(word, game, steals, boardLetters) {
        console.log("Word Played!");

        var j = 0;
        for(var i in steals) { 
            for(var j = 0; j < game.players.length; j++) {
                if(game.players[j].id == that.id) continue;
                if(game.players[j].removeWord(steals[i])) break;
            }
        }

        for(var i in boardLetters) {
            game.removeFromBoard(boardLetters[i]);
        }

        return true;
    };

    var _isWordWitin = function(word, bigword){
        
        var letter_pos = -1;

        for(var i in word) {
            letter_pos = bigword.indexOf(word[i]);
            if(letter_pos >= 0) {
                bigword = _strRemove(bigword, letter_pos);
            } else return false;
            console.log(i, ":", bigword);
        }

        return true;
    };

    var _strRemove = function(word, i) {
        return word.substr(0,i) + word.substr(i+1, word.length-1);
    };

    return that;
};

module.exports = Player;
