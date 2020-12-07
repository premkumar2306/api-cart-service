const calcSubTotal = function (products) {
  const totalCost = products.reduce((sum, p) => sum + p.itemTotal.amount, 0);
  console.log(`subtotal ${totalCost}`);
  return {
    currencyCode: 'INR',
    amount: totalCost,
    formattedPrice: `₹${(totalCost / 100).toFixed(2)}`,
  };
};
module.exports = calcSubTotal;
