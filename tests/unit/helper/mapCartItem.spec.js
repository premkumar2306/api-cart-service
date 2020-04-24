const mapCartItems = require("../../../helper/mapCartItems");

describe('map Cart Item', () => {
    test('should map the req to cart and calcualte the item total and subtotal ', () => {
        const cartItems = [
            {
                "brand": "Harry Potter",
                "SKU": "B000062TU1",
                "quantity": "2",
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
                "title": "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
                "category": "DVD",
                "price": {
                    "amount": "1499",
                    "currencyCode": "USD",
                    "formattedPrice": "$14.99"
                }
            },
            {
                "brand": "Acer",
                "SKU": "20190322TU1",
                "category": "Laptop",
                "quantity": "2",
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
                "title": "Acer full edition monitor",
                "price": {
                    "amount": "14999",
                    "currencyCode": "USD",
                    "formattedPrice": "$149.99"
                }
            }
        ]
        const response = mapCartItems(cartItems);
        expect(response[1].itemTotal.amount).toBe(29998);
        expect(response[1].itemTotal.formattedPrice).toBe("$299.98");
    });
});


