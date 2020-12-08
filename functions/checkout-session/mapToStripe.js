const mapCartItems = function (cartItems) {
  const items = cartItems.map((c) => ({
    name: c.brand,
    description: c.description,
    images: [c.images],
    amount: c.itemTotal.amount * 100,
    quantity: c.quantity,
    currency: 'usd',
  }));
  console.log('cart mapping');
  console.log(JSON.stringify(items));
  console.log(items);
  return items;
};
module.exports = mapCartItems;
