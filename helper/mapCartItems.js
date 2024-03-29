const calcItemTotal = function (price, quantity) {
  console.log('calcItemTotal');
  const totalAmt = parseInt(price) * parseInt(quantity);
  console.log(totalAmt);
  return {
    amount: totalAmt,
    currencyCode: 'INR',
    formattedPrice: `₹${(totalAmt / 100).toFixed(2)}`,
  };
};

const mapCartItems = function (cartItems) {
  console.log('enter mapCartItems');
  console.log(cartItems);
  const items = cartItems.map((c) => {
    const itemTotal = calcItemTotal(c.price.amount, c.quantity);
    return {
      sku: c.sku,
      brand: c.brand,
      quantity: c.quantity,
      title: c.title,
      description: c.description,
      images: c.images,
      category: c.category,
      price: c.price,
      partnumber: c.partnumber,
      itemTotal,
    };
  });
  console.log(`cartitems ${items}`);
  return items;
};

module.exports = mapCartItems;
