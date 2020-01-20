module.exports.findProduct = function (products, cartItemId) {
    let match = products.filter(item => {
        if (item.cartItemId == cartItemId)
            return true;
    });
    if (match && match[0])
        return match[0];
};

module.exports.increaseItemQuantity = function(products, cartItemId, qty=1){
    return products.map(item => {
        if (item.cartItemId === cartItemId){
            item.quantity = item.quantity + qty
        }
        return item;
    });
}

module.exports.reduceItemQuantity = function(products, cartItemId, qty=1) {
    const content = products.map(item => {
        if (item.cartItemId === cartItemId) {
            item.quantity = item.quantity - qty;
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

// reduce(id, qty=1){
//     //reduce the quantity of an item in the cart
//     CART.contents = CART.contents.map(item=>{
//         if(item.id === id)
//             item.qty = item.qty - qty;
//         return item;
//     });
//     CART.contents.forEach(async item=>{
//         if(item.id === id && item.qty === 0)
//             await CART.remove(id);
//     });
//     //update localStorage
//     CART.sync()
// },
// remove(id){
//     //remove an item entirely from CART.contents based on its id
//     CART.contents = CART.contents.filter(item=>{
//         if(item.id !== id)
//             return true;
//     });
//     //update localStorage
//     CART.sync()
// },
// empty(){
//     //empty whole cart
//     CART.contents = [];
//     //update localStorage
//     CART.sync()
// },



// increase(id, qty=1){
//     //increase the quantity of an item in the cart
//     CART.contents = CART.contents.map(item=>{
//         if(item.id === id)
//             item.qty = item.qty + qty;
//         return item;
//     });
//     //update localStorage
//     CART.sync()
// },