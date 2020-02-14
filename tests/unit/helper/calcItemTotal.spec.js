const calcItemTotal = require("../../../helper/calcItemTotal");


describe('item Total', () => {
    test('should calculate correct amount and formattedPrice ', () => {
        const cartItem = {
            "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
            "quantity": "2",
            "productId": "B000062TU1",
            "price": {
                "currencyCode": "USD",
                "amount": "1499",
                "formattedPrice": "$14.99"
            },
            "title": "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
            "category": "DVD",
            "brand": "Harry Potter"
        };
        const response = calcItemTotal(cartItem);
        expect(response.amount).toBe(2998);
        expect(response.formattedPrice).toBe("$29.98");
    });
});


