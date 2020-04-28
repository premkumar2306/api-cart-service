const calcItemTotal = require("./calcItemTotal");

const mapCartItems = function (cartItems) {
    console.log('enter mapCartItems');
    console.log(cartItems);
    const items = cartItems.map(c => {
        return {
            SKU: c.SKU,
            brand: c.brand,
            quantity: c.quantity,
            title: c.title,
            images: c.images,
            category: c.category,
            price: {
                amount: c.price.amount,
                currencyCode: c.price.currencyCode || "USD",
                formattedPrice: c.price.formattedPrice
            },
            itemTotal: calcItemTotal(c)
        }
    });
    console.log(`cartitems ${items}`);
    return items;
}

module.exports = mapCartItems