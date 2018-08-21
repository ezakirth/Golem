"use strict";

/**
 * @class Card
 * @author Xavier de Boysson
 * @
 */
class Card {
    constructor(param) {
        // 'point' or 'trade'
        this.type = param.type;

        this.cost = param.cost;

        // Point card
        this.power = param.power;

        // Trade card
        this.reward = param.reward;

        this.bid = {yellow:0, green:0, blue:0, red:0};

        if (this.cost)
        {
            if (this.cost.yellow === undefined) this.cost.yellow = 0;
            if (this.cost.green === undefined) this.cost.green = 0;
            if (this.cost.blue === undefined) this.cost.blue = 0;
            if (this.cost.red === undefined) this.cost.red = 0;
        }
        

        if (this.reward)
        {
            if (this.reward.yellow === undefined) this.reward.yellow = 0;
            if (this.reward.green === undefined) this.reward.green = 0;
            if (this.reward.blue === undefined) this.reward.blue = 0;
            if (this.reward.red === undefined) this.reward.red = 0;
        }


        this.class = 'trade';
        if (this.cost === null)
        {
            this.class = 'obtain';
        }
        if (this.cost && this.cost.any !== undefined)
        {
            this.class = 'upgrade';
        }

        // Player that owns the card, if any
        this.owner = param.owner;

        Cards.push(this);
        this.ID = Cards.length - 1;
        this.elem = null;

        this.generateHTML();
    }

    generateHTML()
    {
        // don't want to generate more than one
        if (this.elem) return;


        var cardDiv = document.createElement('div');

        if (this.type == 'trade')
        {
            var container = document.createElement('div');
            container.className = 'container';
            var bid = document.createElement('div');
            bid.className = 'bid';
            $(bid).append(this.displayRessources(this.bid));


            var separator = document.createElement('img');
            separator.className = 'gem';

            
            if (this.cost)
            {
                // if it's an upgrade, we use upside arrow
                if (!this.reward)
                {
                    separator.src = 'assets/upArrow.png';
                    $(container).append($(separator));
                }
        
                $(container).append($(this.displayRessources(this.cost)));
        
                // if it's a regular trade, we use the downside arrow
                if (this.reward)
                {
                    separator.src = 'assets/downArrow.png';
                    $(container).append($(separator));
                }
                    
            }
        
            if (this.reward)
            {
                $(container).append($(this.displayRessources(this.reward)));
            }

            $(cardDiv).css('background-image', "url('assets/trade"+(1+Math.floor(Math.random()*13))+".png')");
            $(cardDiv).append($(bid));
            $(cardDiv).append($(container));
        }

        if (this.type == 'point')
        {
            var container = document.createElement('div');
            container.className = 'container';
            var power = document.createElement('span');
            power.innerHTML = this.power;
            $(container).append($(power));
            $(container).append($(this.displayRessources(this.cost)));
            $(cardDiv).css('background-image', "url('assets/golem"+(1+Math.floor(Math.random()*11))+".png')");
            $(cardDiv).append($(container));
        }
    
    
        cardDiv.className = this.type + 'Card';
        cardDiv.id = 'cardID' + this.ID;

        $(cardDiv).on('click', function(e) {
            // retrieve the cardID from HTML element
            var cardID = e.currentTarget.id.split('cardID')[1];
            players[0].cardAction(Cards[cardID]);
        });

        this.elem = cardDiv;
    }


    displayRessources(ressources)
    {
        var gems = {};
        gems.container = document.createElement('div');

        for (var type in ressources)
        {
            for (var i=0; i<Math.abs(ressources[type]); i++)
            {
                gems[type] = document.createElement('img');
                gems[type].src = 'assets/' + type + '.png';
                gems[type].className = 'gem';
        
                $(gems.container).append($(gems[type]));
            }
        }

        return gems.container;
    }
    
    updateBid()
    {
        $('#cardID' + this.ID + ' .bid').empty();
        $('#cardID' + this.ID + ' .bid').append(this.displayRessources(this.bid));
    }

    updateLocation()
    {
        this.onPlayerBoard = (this.owner && this.owner.board.indexOf(this) !== -1);
        this.onPlayerPoints = (this.owner && this.owner.points.indexOf(this) !== -1);
        this.onPlayerHand = (this.owner && this.owner.hand.indexOf(this) !== -1);
        this.onTradeBoard = (board && board.tradeCardsBoard.indexOf(this) !== -1);
        this.onPointBoard = (board && board.pointCardsBoard.indexOf(this) !== -1);
    }

}
