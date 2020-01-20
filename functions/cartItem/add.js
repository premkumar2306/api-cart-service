'use strict';
const getCart = require('../get').get;
const updateCart = require("../create").create;

const { findProduct, increaseItemQuantity, reduceItemQuantity } = require('../helper');
const addItem = async (cartId, newItem) => {
    console.log(`cartId: ${cartId}\tadd:${JSON.stringify(newItem)}`);
    const cart = await getCart(cartId);
    console.log(JSON.stringify(cart));
    let productsInCart = JSON.parse(cart.cartItems)
    if (findProduct(productsInCart, newItem.cartItemId)) {
        productsInCart = increaseItemQuantity(productsInCart, newItem.cartItemId, 1);
        console.log(JSON.stringify(newCart));
    } else {
        productsInCart.push(newItem);
    }
    const data = {...cart, ...productsInCart}
    await updateCart(data);
    await getCart(cartId);
    // TODO:
    // Get the cart
    // Add new item after the validtionis correct
    // save the cart back
};

module.exports.addItem = addItem;

module.exports.handler = async function(event, context) {
    debugger;
    console.log(JSON.stringify(event));
    const cartId = event.pathParameters.cartid;
    const newItem = JSON.parse(event.body);
    const data = await addItem(cartId, newItem);
    return { statusCode: 200, body: JSON.stringify({ data }) };
}