'use strict';

const createStripeCheckout = require("./create-stripe-checkout");

module.exports.handler = async function (event, context) {
    console.log(JSON.stringify(event));
    const cartId = event.pathParameters.cartid;
    const customerId = 'cus_H9tezcPBgseibW'
    const data = await createStripeCheckout(cartId, customerId);
    return { statusCode: 200, body: JSON.stringify({ data }) };
}