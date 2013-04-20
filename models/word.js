var Word = function(){
    var 
        that = this,
        wordMap = [];


    //Reads words from the usr/share/dict/web2 dictionary
    var _getWordsFromUnixDictionary = function(){
        var fs = require("fs");

        fs = require('fs')
        fs.readFile(__dirname + "/../data/dict.txt", 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }

            wordMap.push(data);
        });

    };

    that.isWord = function(word) {
        //TODO: do our real lookup here
        //use binary search or mongo lookup or something else
        for(var i in wordMap) {
            if(word.toLowerCase() == wordMap[i]) return true;
        }

        return false;
    };

    _getWordsFromUnixDictionary();

    return that;
}(); 

module.exports = Word;