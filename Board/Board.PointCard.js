/**
 * Draws a point card from the pile and displays it
 * @return {void} 
 */
Board.prototype.drawPointCard = function()
{
    var card = this.pointCardsPile.shift();
    this.pointCardsBoard.push(card);

    $(card.elem).detach().appendTo($('#pointCardsBoard'));
}



/**
 * Generates the point cards pile
 * @return {void} 
 */
Board.prototype.generatePointCardsPile = function()
{
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, green:-2}, power:6}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-3, green:-2}, power:7}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-4}, power:8}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, blue:-2}, power:8}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, green:-3}, power:8}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-3, blue:-2}, power:9}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-2, blue:-2}, power:10}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-5}, power:10}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, red:-2}, power:10}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, blue:-3}, power:11}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-3, red:-2}, power:11}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {blue:-4}, power:12}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-2, red:-2}, power:12}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-3, blue:-2}, power:12}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-2, blue:-3}, power:13}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {blue:-2, red:-2}, power:14}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-3, red:-2}, power:14}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, red:-3}, power:14}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {blue:-5}, power:15}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {red:-4}, power:16}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-2, red:-3}, power:16}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {blue:-3, red:-2}, power:17}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {blue:-2, red:-3}, power:18}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {red:-5}, power:20}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, green:-1, red:-1}, power:9}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-2, blue:-1, red:-1}, power:12}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-1, blue:-2, red:-1}, power:12}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, green:-2, blue:-2}, power:13}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, green:-2, red:-2}, power:15}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-2, blue:-2, red:-2}, power:17}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {green:-2, blue:-2, red:-2}, power:19}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-1, green:-1, blue:-1, red:-1}, power:12}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-3, green:-1, blue:-1, red:-1}, power:14}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-1, green:-3, blue:-1, red:-1}, power:16}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-1, green:-1, blue:-3, red:-1}, power:18}));
    this.pointCardsPile.push(new Card({type: 'point', cost: {yellow:-1, green:-1, blue:-1, red:-3}, power:20}));
}