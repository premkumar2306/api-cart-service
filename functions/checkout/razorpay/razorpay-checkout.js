
// const mapToRazorPay = require("./mapToRazorPay");
const axios = require('axios');

const createOrder = function (cart, cartId, customerId) {
  return new Promise((resolve, reject) => {
    const amount = cart.subTotal.amount;
    const currency = "INR";
    const receipt = "12312312";
    const notes = {
      customerId,
      cartId,
    };
    // const products = mapToRazorPay(cart.cartItems);
    var config = {
      method: "post",
      url: "https://api.razorpay.com/v1/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic cnpwX3Rlc3RfeU9sc0tJeEF5azM0Tlg6TkVLV1F2UHM5dWJGQ2VhTlFURDNqTFdY",
      },
      data: JSON.stringify({
        amount,
        currency,
        receipt,
        notes,
        // products,
      }),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

const createRazorPayCheckout = async (cart, cartId, customerId) => {
  try {
    const order = await createOrder(cart, cartId, customerId);
    console.log(order);
    return order;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

module.exports = createRazorPayCheckout;
