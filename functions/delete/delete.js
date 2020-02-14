'use strict';

const dynamodb = require('../dynamodb');

const deleteCart = async function(cartid) {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            pk: cartid,
            sk: "HMAC_/WrekkZAPx782xttLFbZqviNUOA="
        },
    };
    await dynamodb.delete(params).promise();
}

module.exports.deleteCart = deleteCart;

module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event));
    debugger;
    const cartId = event.pathParameters.cartid;
    try {
        await deleteCart(cartId)
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