/**
 * Checks if player can play a card
 * @param  {Ressources} cost
 * @param  {Ressources} reward
 * @return {boolean}
 */
Player.prototype.canPlay = function(cost, reward)
{
    // if it's an upgrade card
    if (reward === null)
    {
        if (this.getNumberOfGems(this.bidAmount) > 0 && this.getNumberOfGems(this.bidAmount) <= Math.abs(cost.any))
            return true;
        else
            return false;
    }

    // We stop immediatly if we can't afford the cost
    for (var type in cost)
    {
        if (this.ressources[type] + cost[type] < 0)
        {
            return false;
        }
    }

    // If card has a reward, we simulate playing it to see if we will get too many gems
    if (reward !== null)
    {
        var ressources = {};
        for (var type in this.ressources)
        {
            ressources[type] = this.ressources[type];
        }

        for (var type in cost)
        {
            if (type !== 'any') ressources[type] += cost[type];
        }
        for (var type in reward)
        {
            if (type !== 'any') ressources[type] += reward[type];
        }

        // We stop if playing the card returns too many gems
        if (this.getNumberOfGems(ressources) > 10)
        {
            return false;
        }
    }

    return true;
}

/**
 * Checks if player has ressources to buy a point card
 * @param  {Ressources} cost
 * @return {boolean}
 */
Player.prototype.canBuyPointCard = function(cost)
{
    for (var type in cost)
    {
        if (this.ressources[type] + cost[type] < 0)
        {
            return false;
        }
    }
    return true;
}


/**
 * Checks if player has ressources to buy a trade card
 * @param  {number} gemCost
 * @param  {Ressources} bid
 * @return {boolean}
 */
Player.prototype.canBuyTradeCard = function(gemCost, bid)
{
    var numberOfGems = this.getNumberOfGems(this.bidAmount);
    // First, we want to see if have enough gems to buy the card
    if (numberOfGems < gemCost)
    {
        return false;
    }

    // If there is a bid on the card, we need to make sure we don't get too many gems
    if (bid !== null)
    {
        var ressources = {};
        for (var type in this.ressources)
        {
            ressources[type] = this.ressources[type];
        }
    
        for (var type in bid)
        {
            if (type !== 'any') ressources[type] += bid[type];
        }

        // We stop if buying the card returns too many gems
        if (this.getNumberOfGems(ressources) - gemCost > 10)
        {
            return false
        }
    }

    return true;
}


/**
 * Add ressources to player
 * @param {Ressource} ressources 
 */
Player.prototype.addRessources = function(ressources)
{
    for (var type in ressources)
    {
        if (type !== 'any') this.ressources[type] += ressources[type];
    }
}





/**
 * Add a 1 gem bid on a card
 * @param {Card} card
 */
Player.prototype.addBidToCard = function(card)
{
    for (var type in this.bidAmount)
    {
        if (this.bidAmount[type] > 0)
        {
            this.ressources[type]--;
            this.bidAmount[type]--;
            card.bid[type]++;
            break;
        }
    }
}


/**
 * Returns the total number of gems a player has
 * @return {number}
 */
Player.prototype.getNumberOfGems = function(ressources)
{
    var numberOfGems = 0;
    for (var type in ressources)
    {
        numberOfGems += ressources[type];
    }
    return numberOfGems;
}
