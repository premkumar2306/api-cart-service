const { getCart } = require("../get/handler");
const createStripeCheckout = require('./stripe/create-stripe-checkout');
const createRazorPayCheckout = require("./razorpay/razorpay-checkout");

module.exports.handler = async function (event) {
  console.log(JSON.stringify(event));
  const cartId = event.pathParameters.cartid;
  const customerId = 'cus_H9tezcPBgseibW';
  console.log(
    `cartId: ${cartId} checkout process began at ${new Date().toISOString()}`
  );
  const cart = await getCart(cartId);
  const stripeSession = await createStripeCheckout(cart, cartId, customerId);
  const razorOrder = await createRazorPayCheckout(cart, cartId, customerId);
  data = { ...stripeSession, razor: razorOrder, ...cart, id: razorOrder.id };
  return { statusCode: 200, body: JSON.stringify(data) };
};
