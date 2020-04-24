'use strict';

const uuid = require('uuid');

const calcSubTotal = require("./calcSubTotal");
const mapCartItems = require("./mapCartItems");

module.exports = (cart) => {
    if (!cart || cart.cartItems.length < 1) {
        return;
    }
    const timestamp = new Date().getTime();
    let data = {
        pk: cart.pk || uuid.v1(),
        sk: cart.customerid || uuid.v1(),
        cartItems: mapCartItems(cart.cartItems),
        created: timestamp,
        updated: timestamp
    }
    return {...data, subTotal: calcSubTotal(data.cartItems)}
};