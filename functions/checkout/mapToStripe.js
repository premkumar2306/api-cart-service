
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
    console.log("cart mapping")
    return items;
}
module.exports = mapCartItems