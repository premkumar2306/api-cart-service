const dynamodb = require('../dynamodb');
const mapNewCart = require('../../helper/mapNewCart');
const { updateCart } = require('../cartItem/update/handler');

const validate = function (cart) {
  console.log('validate', cart);
  return true;
};

const create = async function (cart) {
  console.log('Enter Create new Cart..');
  console.log(cart);
  const data = mapNewCart(cart);
  console.log('map New Cart completed..');
  console.log(`data to insert ${JSON.stringify(data)}`);
  if (!validate(data)) {
    throw new Error('Validation error');
  }
  console.log('validation success..');
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data,
  };
  await dynamodb.put(params).promise();
  const cardId = data.pk;
  console.log(`New Cart: ${cardId} created successfully..`);
  const resp = await updateCart(cardId, cart.cartItems);
  console.log('Cart Items updates successfully');
  return resp;
};

module.exports.create = create;
module.exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  try {
    const body = JSON.parse(event.body);
    const cart = body.cartInput;
    console.log(cart);
    const data = await create(cart);
    return {
      statusCode: 200,
      body: JSON.stringify(data.Item),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: `${JSON.stringify(error)}`,
    };
  }
};
