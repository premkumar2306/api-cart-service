'use strict';

const dynamodb = require('./dynamodb');

module.exports.list = async (event, context) => {
    const params = {
        TableName: "dev-products",
    };
    try {
        const result = await dynamodb.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };

    } catch (error) {
        return {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t fetch the Product item.',
        }
    }
};