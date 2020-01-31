'use strict';

const uuid = require('uuid');

const calcSubTotal = function(products) {
    let totalCost = products.reduce((sum, p) => {
        return sum + p.itemTotal.amount;
    }, 0);
    return {
        currencyCode: "USD",
        amount: totalCost,
        formattedPrice: `$${(totalCost/ 100).toFixed(2)}`
    }
};

const calcItemTotal = function(product) {
    const totalAmt = product.price.amount * product.quantity;
    return {
        amount: totalAmt,
        currencyCode: "USD",
        formattedPrice: `$${(totalAmt/ 100).toFixed(2)}`
    }
}
const mapCartItems = function (cartItems) {
    const items = cartItems.map(c => {
        return {
            productId: c.productId,
            brand: c.brand,
            ASIN: c.ASIN,
            quantity: c.quantity,
            title: c.title,
            img: c.img,
            category: c.category,
            price: {
                amount: c.price.amount,
                currencyCode: c.price.currencyCode || "USD",
                formattedPrice: c.price.formattedPrice
            },
            itemTotal: calcItemTotal(c)
        }
    });
    return items;
}
module.exports = (cart) => {
    if (!cart || cart.cartItems.length < 1) {
        return;
    }
    const timestamp = new Date().getTime();
    let data = {
        pk: cart.pk || uuid.v1(),
        sk: `HMAC_${cart.HMAC}`,
        URLEncodedHMAC: cart.URLEncodedHMAC,
        purchaseURL: cart.upPurchaseURLc,
        cartItems: mapCartItems(cart.cartItems),
        created: timestamp,
        updated: timestamp
    }
    return {...data, subTotal: calcSubTotal(data.cartItems)}
};