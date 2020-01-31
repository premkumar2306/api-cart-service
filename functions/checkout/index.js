'use strict';

const createStripeCheckout = require("./create-stripe-checkout");

module.exports.handler = async function (event, context) {
    debugger;
    console.log(JSON.stringify(event));
    const cartId = event.pathParameters.cartid;
    const data = await createStripeCheckout(cartId);
    return { statusCode: 200, body: JSON.stringify({ data }) };
}