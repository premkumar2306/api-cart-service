module.exports.findProduct = function (products, sku) {
    let match = products.filter(item => {
        if (item.sku == sku)
            return true;
    });
    if (match && match[0])
        return match[0];
};

module.exports.increaseItemQuantity = function(products, sku, qty=1){
    return products.map(item => {
        if (item.sku === sku){
            item.quantity = parseInt(item.quantity) + parseInt(qty)
        }
        return item;
    });
}

module.exports.reduceItemQuantity = function(products, sku, qty=1) {
    const content = products.map(item => {
        if (item.sku === sku) {
            item.quantity = parseInt(item.quantity) - parseInt(qty);
        }
        return item;
    });
    const filtered = content.filter(p => p.quantity > 0);
    return filtered;
}

module.exports.removeItem = function(products, cartItemId){
    const content = products.filter(item=>{
        if(item.cartItemId !== cartItemId)
            return true;
    });
    return content;
}
