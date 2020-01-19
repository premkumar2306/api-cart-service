'use strict';
const dynamodb = require('./dynamodb');
const mapper = require('./mapper');
module.exports.create = async (event, context) => {
  debugger;
  const data = mapper(JSON.parse(event.body));
  console.log(data);
  if (typeof data.pk !== 'string') {
    console.error('Validation Failed');
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    };
  }
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data,
  };
  try {
    const data = await dynamodb.put(params).promise();
    return { statusCode: 200, body: JSON.stringify({ params, data }) };
  } catch (error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    }
  }
};