'use strict';

const createStripeCheckout = require("./create-stripe-checkout");

module.exports.handler = async function (event, context) {
    console.log(JSON.stringify(event));
    const cartID = event.pathParameters.cartid;
    const customerID = 'cus_H9tezcPBgseibW'
    const data = await createStripeCheckout(cartID, customerID);
    return { statusCode: 200, body: JSON.stringify(data) };
}