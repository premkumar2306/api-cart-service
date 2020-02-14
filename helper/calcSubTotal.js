const calcSubTotal = function(products) {
    let totalCost = products.reduce((sum, p) => {
        return sum + p.itemTotal.amount;
    }, 0);
    return {
        currencyCode: "USD",
        amount: totalCost,
        formattedPrice: `$${(totalCost/ 100).toFixed(2)}`
    }
}
module.exports = calcSubTotal;