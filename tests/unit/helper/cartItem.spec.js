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
                "productId": "B000062TU1",
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
                "productId": "20190322TU1",
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
                "productId": "predatorxb2",
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
        const productId = "B000062TU1";
        const response = cartItem.findProduct(cartItems, productId);
        expect(response.productId).toBe(productId);
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
                "productId": "B000062TU1",
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
                "productId": "20190322TU1",
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
                "productId": "predatorxb2",
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
        const productId = "B000062TU1";
        const quantity = 2;
        const response = cartItem.increaseItemQuantity(cartItems, productId, quantity);
        expect(response[0].productId).toBe(productId);
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
                "productId": "B000062TU1",
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
                "productId": "20190322TU1",
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
                "productId": "predatorxb2",
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
        const mockProductId = "B000062TU1";
        const quantity = 1;
        const firstResponse = cartItem.reduceItemQuantity(cartItems, mockProductId, quantity);
        expect(firstResponse[0].productId).toBe(mockProductId);
        expect(firstResponse[0].quantity).toBe(1);
        expect(firstResponse.length).toBe(4);
        const findProudctWithQtyOne = cartItem.findProduct(firstResponse, mockProductId);
        expect(findProudctWithQtyOne).not.toBeUndefined();
        // again reduct the quantity
        const secondResponse = cartItem.reduceItemQuantity(firstResponse, mockProductId, quantity);
        expect(secondResponse.length).toBe(3);
        const findProudctWithZeroQty = cartItem.findProduct(secondResponse, mockProductId);
        expect(findProudctWithZeroQty).toBeUndefined();
    });
});


