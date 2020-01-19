'use strict';
const dynamodb = require('./dynamodb');
const mapper = require('./mapper/mapCart');
module.exports.create = async (event, context) => {
  debugger;
  console.log(JSON.stringify(event));
  const data = mapper(JSON.parse(event.body));
  console.log(data);
  if (typeof data.pk !== 'string') {
    console.error('Validation Failed');
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item. Validation Failed',
    };
  }
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data,
  };
  try {
    const data = await dynamodb.put(params).promise();
    return { statusCode: 200, body: JSON.stringify({ params, data: data.Item }) };
  } catch (error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: `Couldn\'t create the todo item.${JSON.stringify(error)}`,
    }
  }
};