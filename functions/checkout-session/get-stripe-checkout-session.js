const getStripeCheckoutSession = async (sessionID) => {
    const stripe = require('stripe')(process.env.STRIPE_API_KEY);
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionID);
        return session;
    } catch (error) {
        console.log(error)
        return {error}
    }
    
};

module.exports = getStripeCheckoutSession;