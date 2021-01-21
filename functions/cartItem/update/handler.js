const { getCart } = require("../../get/handler");
const { findProduct, updateItemQuantity } = require("../../../helper/common");
const { getPrice } = require("../../../helper/common");
const mapper = require("../../../helper/mapCart");
const dynamodb = require("../../dynamodb");

const updateCart = async (cartId, newCartItems) => {
  console.info(`cartId: ${cartId}\tadd:${JSON.stringify(newCartItems)}`);
  const cart = await getCart(cartId);
  if (!cart) {
    throw new Error("Not able to find the cart");
  }
  console.info(JSON.stringify(cart));
  const productsInCart = cart.cartItems;
  delete cart.subTotal;
  // add price to the product

  // TODO: reduce or increase need to check with the business
  const tempCart = [];
  for (let i = 0; i < newCartItems.length; i++) {
    const cartItem = newCartItems[i];
    const existingItem = findProduct(productsInCart, cartItem.sku);
    if (existingItem) {
      delete existingItem.itemTotal;
      existingItem.quantity = updateItemQuantity(
        existingItem,
        cartItem.sku,
        cartItem.quantity
      );
      existingItem.price = await getPrice(cartItem);
      if (existingItem.quantity > 0) {
        tempCart.push(existingItem);
        console.info("Item quantity updated: ", existingItem);
        console.info(JSON.stringify(existingItem));
      } else {
        console.warn("Existing Item removed: ", existingItem);
      }
    } else {
      const newCartItem = { ...cartItem };
      newCartItem.quantity = newCartItem.quantity || 1;
      newCartItem.price = await getPrice(newCartItem);
      if (newCartItem.quantity > 0) {
        tempCart.push(newCartItem);
      }
    }
  }

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
