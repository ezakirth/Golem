/**
 * Sorts the player hand
 * @return {boolean}
 */
Player.prototype.sortHand = function()
{

    this.hand.sort(function(a,b) {
        if (a.class > b.class) return 1;
        if (b.class > a.class) return -1;
        
        if (!a.reward && !b.reward) return 0;
        if (!a.reward && b.reward) return -1;
        if (a.reward && !b.reward) return 1;
        
        if (!a.cost && !b.cost)
        {
            if (a.reward.red < b.reward.red) return -1;
            if (b.reward.red < a.reward.red) return 1;
            if (a.reward.blue < b.reward.blue) return -1;
            if (b.reward.blue < a.reward.blue) return 1;
            if (a.reward.green < b.reward.green) return -1;
            if (b.reward.green < a.reward.green) return 1;
            if (a.reward.yellow < b.reward.yellow) return -1;
            if (b.reward.yellow < a.reward.yellow) return 1;
            return 0;
        }
         
        if (!a.cost && b.cost) return -1;
        if (a.cost && !b.cost) return 1;

        if (a.cost.red < b.cost.red) return 1;
        if (b.cost.red < a.cost.red) return -1;
        if (a.cost.blue < b.cost.blue) return 1;
        if (b.cost.blue < a.cost.blue) return -1;
        if (a.cost.green < b.cost.green) return 1;
        if (b.cost.green < a.cost.green) return -1;
        if (a.cost.yellow < b.cost.yellow) return 1;
        if (b.cost.yellow < a.cost.yellow) return -1;
        return 0;
    });
 
    for (var index in this.hand)
    {
        var card = this.hand[index].elem;
        $(card).detach().appendTo('#player1Hand');
    }
}