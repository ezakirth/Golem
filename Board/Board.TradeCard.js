

/**
 * Draws a trade card from the pile and displays it
 * @return {void} 
 */
Board.prototype.drawTradeCard = function()
{
    var card = this.tradeCardsPile.shift();
    this.tradeCardsBoard.push(card);
    $(card.elem).detach().appendTo($('#tradeCardsBoard'));
}



/**
 * Generates the trade cards pile
 * @return {void} 
 */
Board.prototype.generateTradeCardsPile = function()
{
    // starting hand
    // upgrade
    //(new TradeCard({any:2}, null));
    // obtain
    //(new TradeCard(null, {yellow:2}));


    // Upgrade
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {any:-3}, reward: null}));
    // Obtain
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {green:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {blue:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {red:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {yellow:1, green:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {yellow:1, blue:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {yellow:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {yellow:2, green:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: null, reward: {yellow:4}}));
    //trade
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-3}, reward: {red:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-1}, reward: {yellow:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-2}, reward: {green:3, yellow:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-2}, reward: {red:1, green:1, yellow:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-1}, reward: {blue:1, yellow:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-2}, reward: {blue:1, yellow:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-3}, reward: {blue:2, yellow:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-1}, reward: {green:2, yellow:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-4}, reward: {blue:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-2}, reward: {blue:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-1, yellow:-1}, reward: {red:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-1}, reward: {green:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-2}, reward: {red:1, yellow:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-3}, reward: {green:1, blue:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-2}, reward: {red:1, green:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-3}, reward: {red:1, blue:1, yellow:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-1}, reward: {green:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-3}, reward: {red:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-1}, reward: {blue:1, green:1, yellow:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-1}, reward: {green:2, yellow:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-1}, reward: {green:1, yellow:4}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-5}, reward: {red:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-4}, reward: {blue:1, red:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-2}, reward: {blue:2, green:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-2}, reward: {blue:3, green:1, yellow:1}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-5}, reward: {blue:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-1, yellow:-2}, reward: {red:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-3}, reward: {red:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-3}, reward: {blue:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-3}, reward: {green:3}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {yellow:-2}, reward: {green:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {blue:-2}, reward: {red:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {green:-2}, reward: {blue:2}}));
    this.tradeCardsPile.unshift(new Card({type: 'trade', cost: {red:-1}, reward: {blue:2}}));    
}