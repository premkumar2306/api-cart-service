'use strict';

const dynamodb = require('./dynamodb');

module.exports.delete = async (event, context) => {
    console.log(JSON.stringify(event));
    debugger;
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            pk: event.pathParameters.cartid,
            sk: "HMAC_/WrekkZAPx782xttLFbZqviNUOA="
        },
    };

    // delete the cart from the database
    try {
        await dynamodb.delete(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({}),
        };
    } catch (error) {
        return {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: `Couldn\'t remove the cart item.${JSON.stringify(error)}`,
        }
    }
};