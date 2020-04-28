'use strict';

const crypto = require("crypto");

const calcSubTotal = require("./calcSubTotal");
const mapCartItems = require("./mapCartItems");

module.exports = (cart) => {
    if (!cart || cart.cartItems.length < 1) {
        return;
    }
    console.log('enter mapper')
    const timestamp = new Date().getTime();
    const uuid = crypto.randomBytes(8).toString("hex");
    let data = {
        pk: cart.cartId || uuid,
        sk: cart.customerId || uuid,
        cartItems: mapCartItems(cart.cartItems),
        created: timestamp,
        updated: timestamp
    }
    console.log(`data ${data}`);
    return {...data, subTotal: calcSubTotal(data.cartItems)}
};