'use strict';

const Client = require('@amazonpay/amazon-pay-api-sdk-nodejs');
const config = require('./config');
const uuidv4 = require('uuid/v4');

const payload = {
    storeId: 'amzn1.application-oa2-client.b69da3b3df7845b08cbdfd774d8f8acd',
    webCheckoutDetails: {
        checkoutReviewReturnUrl: 'http://localhost:3001/CheckoutReview.html',
        checkoutResultReturnUrl: 'http://localhost:3001/CheckoutResult.html'
    }
};
const headers = {
    'x-amz-pay-idempotency-key': uuidv4().toString().replace(/-/g, '')
};

const newSession = async function () {
    const conf = await config();
    const testPayClient = new Client.WebStoreClient(conf);
    console.log(testPayClient)
    try {
        const response = await testPayClient.createCheckoutSession(payload, headers);
        // console.log(response);
        return response.body;
    } catch (error) {
        console.log(error);
    }
}

module.exports.handler = async (event, context) => {
    debugger;
    console.log(JSON.stringify(event));
    try {
        const session = await newSession();
        return {
            statusCode: 200,
            body: session,
        };
    } catch (error) {
        return {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(error),
        }
    }
};