
'use strict';

const mapCartItems = function (cartItems) {
    const items = cartItems.map(c => {
        return {
            name: c.category,
            description: c.title,
            images: [c.images],
            amount: c.itemTotal.amount,
            quantity: c.quantity,
            sku: c.SKU,
            currency: 'usd'
        }
    });
    return items;
}
module.exports = mapCartItems