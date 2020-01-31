
'use strict';

const mapCartItems = function (cartItems) {
    const items = cartItems.map(c => {
        return {
            name: c.category,
            description: c.title,
            images: [c.img],
            amount: c.itemTotal.amount,
            quantity: c.quantity,
            currency: 'usd'
        }
    });
    return items;
}
module.exports = mapCartItems