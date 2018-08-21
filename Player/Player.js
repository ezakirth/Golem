"use strict";

/**
 * @class Player
 * @author Xavier de Boysson
 * @
 */
class Player {
    /**
     * 
     * @param {number} power 
     * @param {object} cost 
     */
    constructor(number=1) {
        this.number = number;
        this.setup();
    }

    setup()
    {
        this.bidAmount = {yellow:0, green:0, blue:0, red:0};
        this.totalPoints = 0;

        // First player has 3 gems, others have 4
        this.ressources = {yellow:(this.number === 1 ? 3 : 1), green:0, blue:0, red:0};
        this.board = Array();
        this.hand = Array();
        this.points = Array();

        // default upgrade and obtain cards
        var upgradeCard = new Card({type: 'trade', cost: {any:-2}, reward: null, owner: this});
        var obtainCard = new Card({type: 'trade', cost: null, reward: {yellow:2}, owner: this});
        this.hand.push(upgradeCard);
        this.hand.push(obtainCard);

        $(upgradeCard.elem).detach().appendTo('#player1Hand');
        $(obtainCard.elem).detach().appendTo('#player1Hand');

        this.updateRessources();
    }


    updateRessources()
    {
        $('#player' + this.number + 'Ressources').empty();
        var gems = {};
        gems.container = document.createElement('div');
    
        for (var type in this.ressources)
        {
            for (var i=0; i<Math.abs(this.ressources[type]); i++)
            {
                gems[type] = document.createElement('img');
                gems[type].src = 'assets/' + type + '.png';
                gems[type].className = 'gemBig ' + type;
        
                $(gems[type]).on('click', this.prepareBid);

                $(gems.container).append($(gems[type]));
            }
        }
    
        $('#player' + this.number + 'Ressources').append($(gems.container));    
    }

    prepareBid(e)
    {
        var gem = e.currentTarget;
        var player = players[0];

        var type = $(gem).attr('class').replace('gemBig','').trim();
        type = type.replace('transparent','').trim();
        if ($(gem).hasClass('transparent'))
        {
            player.bidAmount[type]--;
            $(gem).removeClass('transparent');
        }
        else
        {
            if (player.getNumberOfGems(player.bidAmount) < 5)
            {
                player.bidAmount[type]++;
                $(gem).addClass('transparent');
            }
        }
        board.update();
    }

    updateAll()
    {
        this.bidAmount = {yellow:0, green:0, blue:0, red:0};
        $("#player1Ressources").removeClass('usable');
        if (this.getNumberOfGems(this.ressources) > 0)
        {
            $("#player1Ressources").addClass('usable');
        }
        this.sortHand();
        this.updateRessources();
        board.update();
    }
}
