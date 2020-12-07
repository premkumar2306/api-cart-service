const getPrice = function (sku) {
  return {
    amount: '11100',
    currencyCode: 'INR',
    formattedPrice: '₹111.00',
  };
};

const findProduct = function (products, sku) {
  const match = products.filter((item) => {
    if (item.sku === sku) return true;
  });
  if (match && match[0]) return match[0];
};

const removeProduct = function (products, sku) {
  const content = products.filter((item) => {
    item.sku !== sku;
  });
  return content;
};

const updateItemQuantity = function (product, sku, qty = 1) {
  const tempProduct = {...product}
  if (tempProduct.sku === sku) {
    tempProduct.quantity = parseInt(tempProduct.quantity) || parseInt(qty) || 0;
    if (tempProduct.quantity < 0) {
      tempProduct.quantity = 0;
    }
  }
  return tempProduct;
};

module.exports = {
  getPrice,
  findProduct,
  removeProduct,
  updateItemQuantity,
};
