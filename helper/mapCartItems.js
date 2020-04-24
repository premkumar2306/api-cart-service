const calcItemTotal = require("./calcItemTotal");

const mapCartItems = function (cartItems) {
    const items = cartItems.map(c => {
        return {
            SKU: c.SKU,
            brand: c.brand,
            ASIN: c.ASIN,
            quantity: c.quantity,
            title: c.title,
            img: c.images,
            partnumber: c.partnumber,
            category: c.category,
            price: {
                amount: c.price.amount,
                currencyCode: c.price.currencyCode || "USD",
                formattedPrice: c.price.formattedPrice
            },
            itemTotal: calcItemTotal(c)
        }
    });
    return items;
}

module.exports = mapCartItems