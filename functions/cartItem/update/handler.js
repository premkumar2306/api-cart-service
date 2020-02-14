'use strict';
const getCart = require('../../get/handler').get;
const updateCart = require("../../create/handler").create;
const { findProduct, reduceItemQuantity } = require('../../../helper/cartItem');

const addItem = async (cartId, newItem) => {
    console.log(`cartId: ${cartId}\tadd:${JSON.stringify(newItem)}`);
    const cart = await getCart(cartId);
    console.log(JSON.stringify(cart));
    let productsInCart = cart.cartItems;
    // TODO: reduce or increase need to check with the business
    if (findProduct(productsInCart, newItem.cartItemId)) {
        productsInCart = reduceItemQuantity(productsInCart, newItem.cartItemId, newItem.quantity);
        console.log(JSON.stringify(productsInCart));
    } else {
        productsInCart.push(newItem);
    }
    const data = { ...cart, ...{ cartItems: productsInCart } }
    await updateCart(data);
    const response = await getCart(cartId);
    return response;
};

module.exports.addItem = addItem;

module.exports.handler = async function (event, context) {
    debugger;
    console.log(JSON.stringify(event));
    const cartId = event.pathParameters.cartid;
    const newItem = JSON.parse(event.body);
    const data = await addItem(cartId, newItem);
    return { statusCode: 200, body: JSON.stringify({ data }) };
}