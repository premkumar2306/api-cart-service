'use strict';

const dynamodb = require('./dynamodb');

module.exports.get = async (event, context) => {
    debugger;
    const params = {
        TableName: "dev-products", //process.env.DYNAMODB_TABLE,
        Key: {
            pk: event.pathParameters.id,
        }
    };
    try {
        const result = await dynamodb.get(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
    } catch (error) {
        return {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t fetch the Product item.',
        }
    }
};