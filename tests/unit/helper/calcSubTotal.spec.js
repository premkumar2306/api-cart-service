const calcSubTotal = require("../../../helper/calcSubTotal");

test('should calculate the item Total for each item in cart ', () => {
    const cartItems = [
        {
            "images": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
            "itemTotal": {
                "currencyCode": "USD",
                "amount": 2998,
                "formattedPrice": "$29.98"
            },
            "quantity": "2",
            "SKU": "B000062TU1",
            "price": {
                "currencyCode": "USD",
                "amount": "1499",
                "formattedPrice": "$14.99"
            },
            "title": "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
            "category": "DVD",
            "brand": "Harry Potter"
        },
        {
            "images": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
            "itemTotal": {
                "currencyCode": "USD",
                "amount": 29998,
                "formattedPrice": "$299.98"
            },
            "quantity": "2",
            "SKU": "20190322TU1",
            "price": {
                "currencyCode": "USD",
                "amount": "14999",
                "formattedPrice": "$149.99"
            },
            "title": "Acer full edition monitor",
            "category": "Laptop",
            "brand": "Acer"
        },
        {
            "images": "https://static.acer.com/up/Resource/Acer/Acer_Gaming/IEM_Katowice_2018/20180209/Predator_XB241.png",
            "itemTotal": {
                "currencyCode": "USD",
                "amount": 24999,
                "formattedPrice": "$249.99"
            },
            "quantity": "1",
            "SKU": "predatorxb2",
            "price": {
                "currencyCode": "USD",
                "amount": "24999",
                "formattedPrice": "$249.99"
            },
            "title": "Acer Monitor Predator series; Game at unimaginable speeds. Lightning-fueled refresh rates let you unleash your maximum potential.",
            "category": "Monitor",
            "brand": "Acer"
        },
        {
            "ASIN": "B000062TU1",
            "itemTotal": {
                "currencyCode": "USD",
                "amount": 1499,
                "formattedPrice": "$14.99"
            },
            "quantity": "1",
            "title": "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
            "price": {
                "currencyCode": "USD",
                "amount": "1499",
                "formattedPrice": "$14.99"
            }
        }
    ];
    const response = calcSubTotal(cartItems);
    expect(response.amount).toBe(59494);
    expect(response.formattedPrice).toBe("$594.94");
});
