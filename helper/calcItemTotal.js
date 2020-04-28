const calcItemTotal = function(product) {
    console.log('calcItemTotal')
    console.log(product)
    const totalAmt = product.price.amount * product.quantity;
    return {
        amount: totalAmt,
        currencyCode: "USD",
        formattedPrice: `$${(totalAmt/ 100).toFixed(2)}`
    }
}

module.exports = calcItemTotal