'use strict';
const getCart = require('../get').get;
const updateCart = require("../create").create;
const { findProduct, increaseItemQuantity } = require('../helper');

const addItem = async (cartId, newItem) => {
    console.log(`cartId: ${cartId}\tadd:${JSON.stringify(newItem)}`);
    const cart = await getCart(cartId);
    console.log(JSON.stringify(cart));
    let productsInCart = cart.cartItems;
    if (findProduct(productsInCart, newItem.cartItemId)) {
        productsInCart = increaseItemQuantity(productsInCart, newItem.cartItemId, newItem.quantity);
        console.log(JSON.stringify(productsInCart));
    } else {
        productsInCart.push(newItem);
    }
    await updateCart(cart);
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