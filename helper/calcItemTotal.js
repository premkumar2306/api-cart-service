const calcItemTotal = function(product) {
    const totalAmt = product.price.amount * product.quantity;
    return {
        amount: totalAmt,
        currencyCode: "USD",
        formattedPrice: `$${(totalAmt/ 100).toFixed(2)}`
    }
}

module.exports = calcItemTotal