'use strict';
const getCart = require('../get').get;
const updateCart = require("../create").create;

const { findProduct, removeItem } = require('../helper');
const deleteItem = async (cartId, newItem) => {
    console.log(`cartId: ${cartId}\tadd:${JSON.stringify(newItem)}`);
    const cart = await getCart(cartId);
    console.log(JSON.stringify(cart));
    let productsInCart = JSON.parse(cart.cartItems)
    if (findProduct(productsInCart, newItem.cartItemId)) {
        productsInCart = removeItem(productsInCart, newItem.cartItemId, 1);
        console.log(JSON.stringify(newCart));
    }
    const data = {...cart, ...productsInCart}
    await updateCart(data);
    await getCart(cartId);
};

module.exports.deleteItem = deleteItem;

module.exports.handler = async function(event, context) {
    debugger;
    console.log(JSON.stringify(event));
    const cartId = event.pathParameters.cartid;
    const newItem = JSON.parse(event.body);
    const data = await deleteItem(cartId, newItem);
    return { statusCode: 200, body: JSON.stringify({ data }) };
}