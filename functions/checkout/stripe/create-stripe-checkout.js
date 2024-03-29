const { getCart } = require("../../get/handler");
const mapToStripe = require("./mapToStripe");

const createStripeCheckout = async (cart, cartId, customerId) => {

  console.log("getCart success.");
  console.log(cart);
  /* eslint-disable-next-line */
  const stripe = require("stripe")(process.env.STRIPE_API_KEY);
  try {
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      payment_intent_data: {
        capture_method: "manual",
      },
      client_reference_id: cartId,
      metadata: {
        cartId,
        customerId,
      },
      line_items: mapToStripe(cart.cartItems),
      success_url:
        "https://www.terakart.com/checkout/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://www.terakart.com/checkout/cancel",
    });
    console.log(session);
    return session;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

module.exports = createStripeCheckout;
