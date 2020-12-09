const mapCartItems = function (cartItems) {
  const items = cartItems.map((c) => ({
    name: c.sku,
    description: c.title,
    images: [c.images],
    amount: c.itemTotal.amount,
    quantity: c.quantity,
    currency: 'inr',
  }));
  console.log('cart mapping');
  console.log(JSON.stringify(items));
  console.log(items);
  return items;
};
module.exports = mapCartItems;
