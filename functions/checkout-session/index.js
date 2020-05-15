'use strict';

const getStripeCheckoutSession = require("./get-stripe-checkout-session");

module.exports.handler = async function (event, context) {
    console.log(JSON.stringify(event));
    const sessionID = event.pathParameters.sessionid;
    const data = await getStripeCheckoutSession(sessionID);
    return { statusCode: 200, body: JSON.stringify(data) };
}