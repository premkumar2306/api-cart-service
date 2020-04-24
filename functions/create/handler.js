'use strict';
const dynamodb = require('../dynamodb');
const mapper = require('../../helper/mapCart');

const validate = function (cart) {
  return true;
}

const create = async function (body) {
  const data = mapper(body);
  console.log(`data to insert ${JSON.stringify(data)}`)
  if (!validate(data)) {
    throw new Error('Validation error');
  }
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data,
  };
  const response = await dynamodb.put(params).promise();
  console.log(response);
  return response;
};

module.exports.create = create;
module.exports.handler = async (event, context) => {
  debugger;
  console.log(JSON.stringify(event));
  try {
    const data = await create(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify({data: data.Item })
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: `${JSON.stringify(error)}`,
    }
  }
};