const getCart = require('../get').get;
const secretManager = require("../getSecrets/secretManager");
const createStripeCheckout = async (cartId) => {
    console.log(`cartId: ${cartId} checkout process began at ${new Date().toISOString()}`);
    const cart = await getCart(cartId);
    console.log(cart);
    const secret = await secretManager();
    const stripe = require('stripe')(secret.STRIPE_API_KEY);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            images: ['https://localhost.com:3000/t-shirt.png'],
            amount: 500,
            currency: 'usd',
            quantity: 1,
        }],
        success_url: 'https://localhost.com:3000/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://localhost.com:3000/cancel',
    });
    console.log(session);
    // const response = await getCart(cartId);
    return {...session, ...cart};
};

module.exports = createStripeCheckout;