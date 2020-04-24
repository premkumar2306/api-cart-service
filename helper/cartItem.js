module.exports.findProduct = function (products, SKU) {
    let match = products.filter(item => {
        if (item.SKU == SKU)
            return true;
    });
    if (match && match[0])
        return match[0];
};

module.exports.increaseItemQuantity = function(products, SKU, qty=1){
    return products.map(item => {
        if (item.SKU === SKU){
            item.quantity = parseInt(item.quantity) + parseInt(qty)
        }
        return item;
    });
}

module.exports.reduceItemQuantity = function(products, SKU, qty=1) {
    const content = products.map(item => {
        if (item.SKU === SKU) {
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