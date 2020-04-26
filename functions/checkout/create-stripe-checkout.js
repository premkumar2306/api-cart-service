const getCart = require('../get/handler').get;
const secretManager = require("../secrets/secretManager");
const mapToStripe = require("./mapToStripe");

const createStripeCheckout = async (cartId, customerId) => {
    console.log(`cartId: ${cartId} checkout process began at ${new Date().toISOString()}`);
    const cart = await getCart(cartId);
    console.log(cart);
    const secret = await secretManager("/external");
    const stripe = require('stripe')(secret.STRIPE_API_KEY);
    try {
        const session = await stripe.checkout.sessions.create({
            customer:customerId,
            payment_method_types:['card'],
            billing_address_collection:'auto',
            shipping_address_collection: {
                'allowed_countries': ['US', 'CA'],
            },
            mode: 'setup',
            client_reference_id: cartId,
            metadata: {
                cartId,
                customerId
            },
            line_items: mapToStripe(cart.cartItems),
            success_url: 'https://localhost.com:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://localhost.com:3000/cancel',
        });
        console.log({...session, ...cart});
        return {...session, ...cart};
    } catch (error) {
        console.log(error)
        return {error}
    }
    
};

module.exports = createStripeCheckout;