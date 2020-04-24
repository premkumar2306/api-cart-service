'use strict';

const createStripeCheckout = require("./create-stripe-checkout");

module.exports.handler = async function (event, context) {
    debugger;
    console.log(JSON.stringify(event));
    const cartId = event.pathParameters.cartid;
    const customerId = 'cus_H9tezcPBgseibW' //logged in user
    const data = await createStripeCheckout(cartId, customerId);
    return { statusCode: 200, body: JSON.stringify({ data }) };
}