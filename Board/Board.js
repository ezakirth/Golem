"use strict";

/**
 * @class Board
 * @author Xavier de Boysson
 * @
 */
class Board {
    constructor() {
        this.pointCardsPile = Array();
        this.pointCardsBoard = Array();

        this.tradeCardsPile = Array();
        this.tradeCardsBoard = Array();
    }

    setup()
    {
        this.pointCardsPile = Array();
        this.pointCardsBoard = Array();

        this.tradeCardsPile = Array();
        this.tradeCardsBoard = Array();

        this.generatePointCardsPile();
        this.generateTradeCardsPile();

        // shuffle decks
        this.tradeCardsPile.sort( () => Math.random() - 0.5 );
        this.pointCardsPile.sort( () => Math.random() - 0.5 );

        this.update();

    }

    /**
     * Draws trade and point cards, and highlights cards that can be used
     */
    update()
    {
        while (this.pointCardsPile.length > 0 && this.pointCardsBoard.length < 5)
        {
            this.drawPointCard();
        }

        while (this.tradeCardsPile.length > 0 && this.tradeCardsBoard.length < 6)
        {
            this.drawTradeCard();
        }

        if (this.tradeCardsPile.length == 0)
        {
            $('#tradeCardsBack').hide();
        }
        if (this.pointCardsPile.length == 0)
        {
            $('#pointCardsBack').hide();
        }

        var player = players[0];
        if (!player) return;
        

        for (var index in Cards)
        {
            var card = Cards[index];

            // only update cards that have an html element (ie: used cards)
            if (card.elem)
            {
                var usable = false;
                card.updateLocation();

                var gemCost = board.tradeCardsBoard.indexOf(card);

                if (card.onPointBoard && player.canBuyPointCard(card.cost)) usable = true;
                if (card.onTradeBoard && player.canBuyTradeCard(gemCost, card.bid)) usable = true;
                if (card.onPlayerHand && player.canPlay(card.cost, card.reward)) usable = true;

                if (usable)
                {
                    $(card.elem).addClass('usable');
                }
                else
                {
                    $(card.elem).removeClass('usable');
                }
            }
        }
    }

}
