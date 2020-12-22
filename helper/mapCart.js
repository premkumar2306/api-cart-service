const crypto = require('crypto');

const calcSubTotal = require('./calcSubTotal');
const mapCartItems = require('./mapCartItems');
const  { calcTax, calcShipping, calcOrderTotal } = require('./common');

module.exports = (cart) => {
  if (!cart || cart.cartItems.length < 1) {
    return;
  }
  console.log('enter mapper');
  const timestamp = new Date().getTime();
  const uuid = crypto.randomBytes(8).toString('hex');
  const cartItems = mapCartItems(cart.cartItems);
  const subTotal = calcSubTotal(cartItems);
  const tax = calcTax(cart.cartItems);
  const shipping = calcShipping(cart.cartItems);
  const orderTotal = calcOrderTotal(subTotal, tax, shipping);
  const data = {
    pk: cart.pk || uuid,
    sk: cart.sk || uuid,
    customerId: '',
    updated: timestamp,
    cartItems,
    tax,
    shipping,
    subTotal,
    orderTotal
  };
  console.log(`data ${data}`);
  return { ...data,  };
};
