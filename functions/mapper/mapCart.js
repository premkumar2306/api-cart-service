'use strict';

const uuid = require('uuid');

const mapCatItems = function (cartItems) {
    const items = cartItems.map(c => {
        return {
            cartItemId: c.cartItemId,
            ASIN: c.ASIN,
            quantity: c.quantity,
            title: c.title,
            productGroup: c.productGroup,
            price: {
                amount: c.price.amount,
                currencyCode: c.price.currencyCode || "USD",
                formattedPrice: c.price.formattedPrice
            },
            itemTotal: {
                amount: c.itemTotal.amount,
                currencyCode: c.itemTotal.currencyCode || "USD",
                formattedPrice: c.itemTotal.formattedPrice
            }
        }
    });
    return items;
}
module.exports = (cart) => {
    if (!cart || cart.cartItems.length < 1) {
        return;
    }
    const timestamp = new Date().getTime();
    const data = {
        pk: uuid.v1(),
        sk: `HMAC_${cart.HMAC}`,
        HMAC: `${cart.HMAC}`,
        URLEncodedHMAC: cart.URLEncodedHMAC,
        purchaseURL: cart.upPurchaseURLc,
        subTotal: {
            amount: cart.subTotal.amount,
            currencyCode: cart.subTotal.currencyCode,
            formattedPrice: cart.subTotal.formattedPrice
        },
        cartItems: mapCatItems(cart.cartItems),
        created: timestamp,
        updated: timestamp
    }
    return data;
};