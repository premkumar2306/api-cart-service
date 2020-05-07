'use strict';

const dynamodb = require('../dynamodb');


module.exports.get = async function(cartid) {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        KeyConditionExpression: 'pk = :i',
        ExpressionAttributeValues: {
            ':i': cartid
        }
    };
    const result = await dynamodb.query(params).promise();
    return result.Items[0];
}

module.exports.handler = async (event, context) => {
    debugger;
    console.log(JSON.stringify(event));
    const cartId = event.queryStringParameters.id;
    try {
        const cart = await this.get(cartId);
        return {
            statusCode: 200,
            body: JSON.stringify(cart),
        };
    } catch (error) {
        return {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(error),
        }
    }
};