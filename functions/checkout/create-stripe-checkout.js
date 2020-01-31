const getCart = require('../get').get;
const secretManager = require("../getSecrets/secretManager");
const mapToStripe = require("./mapToStripe");

const createStripeCheckout = async (cartId, customerId) => {
    console.log(`cartId: ${cartId} checkout process began at ${new Date().toISOString()}`);
    const cart = await getCart(cartId);
    console.log(cart);
    const secret = await secretManager();
    const stripe = require('stripe')(secret.STRIPE_API_KEY);

    const session = await stripe.checkout.sessions.create({
        customer:customerId,
        payment_method_types:['card'],
        billing_address_collection:'required',
        line_items: mapToStripe(cart.cartItems),
        success_url: 'https://localhost.com:3000/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://localhost.com:3000/cancel',
    });
    console.log(session);
    return {...session, ...cart};
};

module.exports = createStripeCheckout;