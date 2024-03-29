const dynamodb = require('../dynamodb');

module.exports.getCart = async function (cartid) {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    KeyConditionExpression: 'pk = :i',
    ExpressionAttributeValues: {
      ':i': cartid,
    },
  };
  const result = await dynamodb.query(params).promise();
  return result.Items[0];
};

module.exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  const cartId = event.pathParameters.cartid;
  try {
    const cart = await this.getCart(cartId);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(error),
    };
  }
};
