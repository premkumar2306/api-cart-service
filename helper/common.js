const getPrice = function (sku) {
  return {
    amount: "11100",
    currencyCode: "INR",
    formattedPrice: "₹111.00",
  };
};

const findProduct = function (products, sku) {
  let match = products.filter((item) => {
    if (item.sku == sku) return true;
  });
  if (match && match[0]) return match[0];
};

const removeProduct = function (products, sku) {
  const content = products.filter((item) => {
    if (item.sku !== sku) return true;
  });
  return content;
};

const updateItemQuantity = function (product, sku, qty = 1) {
  if (product.sku === sku) {
    product.quantity = parseInt(product.quantity) || 0;
    if (product.quantity < 0) {
      product.quantity = 0;
    }
  }
  return product;
};

module.exports = {
  getPrice,
  findProduct,
  removeProduct,
  updateItemQuantity,
};
