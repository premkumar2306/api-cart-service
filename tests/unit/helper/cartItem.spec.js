const cartItem = require("../../../helper/cartItem");


describe('cartItem helper methods', () => {
    test('should  find the product in cart', () => {
        const cartItems = [
            {
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
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
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
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
                "img": "https://static.acer.com/up/Resource/Acer/Acer_Gaming/IEM_Katowice_2018/20180209/Predator_XB241.png",
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
        const SKU = "B000062TU1";
        const response = cartItem.findProduct(cartItems, SKU);
        expect(response.SKU).toBe(SKU);
        expect(response.quantity).toBe("2");
        expect(response.category).toBe("DVD");
    });

    test('should be able to increment the quantity', () => {
        const cartItems = [
            {
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
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
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
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
                "img": "https://static.acer.com/up/Resource/Acer/Acer_Gaming/IEM_Katowice_2018/20180209/Predator_XB241.png",
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
        const SKU = "B000062TU1";
        const quantity = 2;
        const response = cartItem.increaseItemQuantity(cartItems, SKU, quantity);
        expect(response[0].SKU).toBe(SKU);
        expect(response[0].quantity).toBe(4);
        expect(response[0].category).toBe("DVD");
    });

    test('should be able to decrement the quantity', () => {
        const cartItems = [
            {
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
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
                "img": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
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
                "img": "https://static.acer.com/up/Resource/Acer/Acer_Gaming/IEM_Katowice_2018/20180209/Predator_XB241.png",
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
        const mockSKU = "B000062TU1";
        const quantity = 1;
        const firstResponse = cartItem.reduceItemQuantity(cartItems, mockSKU, quantity);
        expect(firstResponse[0].SKU).toBe(mockSKU);
        expect(firstResponse[0].quantity).toBe(1);
        expect(firstResponse.length).toBe(4);
        const findProudctWithQtyOne = cartItem.findProduct(firstResponse, mockSKU);
        expect(findProudctWithQtyOne).not.toBeUndefined();
        // again reduct the quantity
        const secondResponse = cartItem.reduceItemQuantity(firstResponse, mockSKU, quantity);
        expect(secondResponse.length).toBe(3);
        const findProudctWithZeroQty = cartItem.findProduct(secondResponse, mockSKU);
        expect(findProudctWithZeroQty).toBeUndefined();
    });
});


