const getCart = require('../../get/handler').get;
const { findProduct, updateItemQuantity } = require('../../../helper/common');
const { getPrice } = require('../../../helper/common');
const mapper = require('../../../helper/mapCart');
const dynamodb = require('../../dynamodb');

const updateCart = async (cartId, newCartItems) => {
  console.log(`cartId: ${cartId}\tadd:${JSON.stringify(newCartItems)}`);
  const cart = await getCart(cartId);
  if (!cart) {
    throw new Error('Not able to find the cart');
  }
  console.log(JSON.stringify(cart));
  const productsInCart = cart.cartItems;
  delete cart.subTotal;
  // add price to the product

  // TODO: reduce or increase need to check with the business
  const tempCart = [];
  newCartItems.forEach((cartItem) => {
    const existingItem = findProduct(productsInCart, cartItem.sku);
    if (existingItem) {
      delete existingItem.itemTotal;
      updateItemQuantity(existingItem, cartItem.sku, cartItem.quantity);
      existingItem.price = getPrice(cartItem.sku);
      if (existingItem.quantity > 0) {
        tempCart.push(existingItem);
        console.log('Item quantity updated: ', existingItem);
        console.log(JSON.stringify(existingItem));
      } else {
        console.log('Existing Item removed: ', existingItem);
      }
    } else {
      const newCartItem = { ...cartItem };
      newCartItem.quantity = parseInt(newCartItem.quantity, 2);
      newCartItem.price = getPrice(newCartItem.sku);
      tempCart.push(newCartItem);
    }
  });

  const data = { ...cart, ...{ cartItems: tempCart } };
  const body = mapper(data);
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: body,
  };
  try {
    await dynamodb.put(params).promise();
    const response = await getCart(cartId);
    return response;
  } catch (error) {
    console.log(error);
  }
  return {};
};

module.exports.updateCart = updateCart;

module.exports.handler = async function (event) {
  console.log(JSON.stringify(event));
  const cartId = event.pathParameters.cartid;
  const newItem = JSON.parse(event.body);
  const data = await updateCart(cartId, newItem);
  return { statusCode: 200, body: JSON.stringify({ data }) };
};
