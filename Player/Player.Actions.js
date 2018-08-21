/**
 * Does the correct action after clicking on a card
 * @param {Card} card
 */
Player.prototype.cardAction = function(card)
{
    var didSomething = false;
    // If the card is on the trade or point board, attempt to buy it
    if (card.onTradeBoard || card.onPointBoard)
    {
        didSomething = this.buyCard(card);
    }

    // If the card is in hand, attempt to use it
    if (card.onPlayerHand)
    {
        didSomething = this.useTradeCard(card);
    }

    // Update the board and hand if something was done
    if (didSomething)
    {
        this.updateAll();
    }
}


/**
 * Attempt to buy a card
 * @param {Card} card
 * @return {boolean}
 */
Player.prototype.buyCard = function(card)
{
    // Dealing with a point card
    if (card.onPointBoard && this.canBuyPointCard(card.cost))
    {
        var index = board.pointCardsBoard.indexOf(card);

        this.addRessources(card.cost);

        board.pointCardsBoard.splice(index, 1);
        card.owner = this;
        this.points.push(card);
        var bonus = 0;
        if (index == 5) bonus = 3;
        if (index == 4) bonus = 2;
        this.totalPoints += card.power + bonus;
        $(card.elem).detach().appendTo('#player1Points');
        $('#totalPoints').html('Total: ' + this.totalPoints);
        console.log('bought point card');
        return true;
    }

    // Dealing with a trade card
    var index = board.tradeCardsBoard.indexOf(card);
    if (card.onTradeBoard && this.canBuyTradeCard(index, card.bid))
    {
        // We pay 1 gem for each card before the one we want
        for (var i=1; i<=index; i++)
        {
            this.addBidToCard(board.tradeCardsBoard[i-1]);
            board.tradeCardsBoard[i-1].updateBid();
        }

        board.tradeCardsBoard.splice(index, 1);

        // Handles the bid
        this.addRessources(card.bid);
        card.bid = {};
        card.updateBid();
        card.owner = this;

        this.hand.push(card);
        $(card.elem).detach().appendTo('#player1Hand');

        console.log('bought trade card');
        return true;
    }

    console.log('Cannot do that');
    return false;
}




/**
 * Attempt to use trade card
 * @param {Card} card
 * @return {boolean}
 */
Player.prototype.useTradeCard = function(card)
{
    if (this.canPlay(card.cost, card.reward))
    {
        var index = this.hand.indexOf(card);
        this.hand.splice(index, 1);
        $(card.elem).detach().appendTo('#player1Board');
        this.board.push(card);
        
        if (card.class == 'upgrade')
        {
            var upgrade = Array();
            upgrade['yellow'] = 'green';
            upgrade['green'] = 'blue';
            upgrade['blue'] = 'red';
            upgrade['red'] = 'red';
            var upgradeCharges = Math.abs(card.cost.any);

            while(upgradeCharges > 0)
            {
                for (var type in this.bidAmount)
                {
                    if (this.bidAmount[type] > 0)
                    {
                        this.ressources[upgrade[type]]++;
                        this.bidAmount[upgrade[type]]++;
                        upgradeCharges--;
                        this.bidAmount[type]--;
                        this.ressources[type]--;
                        break;
                    }
                }
            }
        }
        else
        {
            this.addRessources(card.cost);
            this.addRessources(card.reward);
        }
        console.log("card used");
        return true;
    }
    else
    {
        console.log("too poor to use !");
        return false;
    }
}

/**
 * Rest and pick up board
 * @return {boolean}
 */
Player.prototype.rest = function()
{
    for (index in this.board)
    {
        var card = this.board[index];
        $(card.elem).detach().appendTo('#player1Hand');
        this.hand.push(card);
    }

    this.board = Array();

    this.updateAll();

    return true;
}