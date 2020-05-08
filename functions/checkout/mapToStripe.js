
'use strict';

const mapCartItems = function (cartItems) {
    const items = cartItems.map(c => {
        return {
            name: c.brand,
            description: c.description,
            images: [c.images],
            amount: c.itemTotal.amount,
            quantity: c.quantity,
            currency: 'usd'
        }
    });
    return items;
}
module.exports = mapCartItems