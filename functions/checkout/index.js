const { getCart } = require("../get/handler");
const createRazorPayCheckout = require("./razorpay/razorpay-checkout");
const dynamodb = require('../dynamodb');

module.exports.handler = async function (event) {
  console.log(JSON.stringify(event));
  const customerId = "cus_H9tezcPBgseibW";
  const body = JSON.parse(event.body);
  if (!body || !body.checkoutInput) {
    return { statusCode: 501, body: JSON.stringify('Cart ID not found') };
  }
  const cartId = body.checkoutInput.pk || body.checkoutInput.id;
  console.log(
    `cartId: ${cartId} checkout process began at ${new Date().toISOString()}`
  );
  const cart = await getCart(cartId);
  const checkout = { ...cart };
  if (body && body.checkoutInput && body.checkoutInput.razorpay_payment_id) {
    checkout.payment = {
      razorpay_order_id: body.checkoutInput.razorpay_order_id,
      razorpay_payment_id: body.checkoutInput.razorpay_payment_id,
      razorpay_signature: body.checkoutInput.razorpay_signature
    };
  } else {
    const razorOrder = await createRazorPayCheckout(checkout, cartId, customerId);
    checkout.razor = razorOrder;
    checkout.id = razorOrder.id;
  }
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: checkout,
  };
  try {
    await dynamodb.put(params).promise();
    const response = await getCart(cartId);
    return { statusCode: 200, body: JSON.stringify(response) };
  } catch (error) {
    console.log(error);
    return { statusCode: 501, body: JSON.stringify(error) };
  }
};
