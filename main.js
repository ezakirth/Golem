
var board = new Board();


var players = Array();

var Cards = Array();

$(document).ready(function() {
    board.setup();
    players.push(new Player(1));

    players[0].updateAll();


});

