const dynamodb = require('../dynamodb');
const mapNewCart = require('../../helper/mapNewCart');
const { updateCart } = require('../cartItem/update/handler');

const validate = function (cart) {
  console.info('validate', cart);
  return true;
};

const create = async function (cart) {
  console.info('Enter Create new Cart..');
  console.info(cart);
  const data = mapNewCart(cart);
  console.info('Map New Cart completed..');
  console.info(`data to insert ${JSON.stringify(data)}`);
  if (!validate(data)) {
    throw new Error('Validation error');
  }
  console.info('validation success..');
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: data,
  };
  await dynamodb.put(params).promise();
  const cardId = data.pk;
  console.info(`New Cart: ${cardId} created successfully..`);
  const resp = await updateCart(cardId, cart.cartItems);
  console.info('Cart Items updates successfully');
  return resp;
};

module.exports.create = create;
module.exports.handler = async (event) => {
  console.info(JSON.stringify(event));
  try {
    const body = JSON.parse(event.body);
    const cart = body.cartInput;
    console.log(cart);
    const newCart = await create(cart);
    return {
      statusCode: 200,
      body: JSON.stringify(newCart),
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
