'use strict';

const dynamodb = require('./dynamodb');

module.exports.get = async (event, context) => {
    debugger;
    console.log(event);
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        KeyConditionExpression: 'pk = :i',
        ExpressionAttributeValues: {
            ':i': event.pathParameters.id
        }
    };
    try {
        const result = await dynamodb.query(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Items[0]),
        };
    } catch (error) {
        return {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(error),
        }
    }
};