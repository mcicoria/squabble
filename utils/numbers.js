var Numbers = function(){

    var _randomInt = function(min, max) {
        return Math.ceil((Math.random()*max) + min);
    };

    return {
        randomInt: _randomInt
    };

}();

module.exports = Numbers;