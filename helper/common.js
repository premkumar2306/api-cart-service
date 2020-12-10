const getPrice = function (sku) {
  return {
    amount: '11100',
    currencyCode: 'INR',
    formattedPrice: '₹111.00',
  };
};

const findProduct = function (products, sku) {
  if (!products) {
    return false;
  }
  const match = products.filter((item) => {
    if (item.sku === sku) return true;
  });
  if (match && match[0]) return match[0];
};

const removeProduct = function (products, sku) {
  if (!products) {
    return false;
  }
  const content = products.filter((item) => {
    item.sku !== sku;
  });
  return content;
};

const updateItemQuantity = function (product, sku, qty = 1) {
  const tempProduct = {...product}
  if (tempProduct.sku === sku) {
    tempProduct.quantity = parseInt(qty) || 0;
    if (tempProduct.quantity < 0) {
      tempProduct.quantity = 0;
    }
  }
  return tempProduct.quantity;
};

const calcTax = function(products) {
  return 0.0;
}

const calcShipping = function(products) {
  return 0.0;
}

const calcOrderTotal = function(subTotal, tax, shipping) {
  const totalCost =  parseInt(subTotal.amount) + parseInt(tax) + parseInt(shipping);
  return {
    currencyCode: 'INR',
    amount: totalCost,
    formattedPrice: `₹${(totalCost / 100).toFixed(2)}`,
  };
}

module.exports = {
  getPrice,
  findProduct,
  removeProduct,
  updateItemQuantity,
  calcTax,
  calcShipping,
  calcOrderTotal
};
