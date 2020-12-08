const { findProduct, updateItemQuantity } = require('../../../helper/common');
describe('cartItem helper methods', () => {
  test('should  find the product in cart', () => {
    const cartItems = [
      {
        images: 'https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png',
        itemTotal: {
          currencyCode: 'INR',
          amount: 2998,
          formattedPrice: '₹29.98',
        },
        quantity: '2',
        sku: 'B000062TU1',
        price: {
          currencyCode: 'INR',
          amount: '1499',
          formattedPrice: '₹14.99',
        },
        title: "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
        category: 'DVD',
        brand: 'Harry Potter',
      },
      {
        images: 'https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png',
        itemTotal: {
          currencyCode: 'INR',
          amount: 29998,
          formattedPrice: '₹299.98',
        },
        quantity: '2',
        sku: '20190322TU1',
        price: {
          currencyCode: 'INR',
          amount: '14999',
          formattedPrice: '₹149.99',
        },
        title: 'Acer full edition monitor',
        category: 'Laptop',
        brand: 'Acer',
      },
      {
        images: 'https://static.acer.com/up/Resource/Acer/Acer_Gaming/IEM_Katowice_2018/20180209/Predator_XB241.png',
        itemTotal: {
          currencyCode: 'INR',
          amount: 24999,
          formattedPrice: '₹249.99',
        },
        quantity: '1',
        sku: 'predatorxb2',
        price: {
          currencyCode: 'INR',
          amount: '24999',
          formattedPrice: '₹249.99',
        },
        title: 'Acer Monitor Predator series; Game at unimaginable speeds. Lightning-fueled refresh rates let you unleash your maximum potential.',
        category: 'Monitor',
        brand: 'Acer',
      },
      {
        ASIN: 'B000062TU1',
        itemTotal: {
          currencyCode: 'INR',
          amount: 1499,
          formattedPrice: '₹14.99',
        },
        quantity: '1',
        title: "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
        price: {
          currencyCode: 'INR',
          amount: '1499',
          formattedPrice: '₹14.99',
        },
      },
    ];
    const sku = 'B000062TU1';
    const response = findProduct(cartItems, sku);
    expect(response.sku).toBe(sku);
    expect(response.quantity).toBe('2');
    expect(response.category).toBe('DVD');
  });

  test('should be able to increment the quantity', () => {
    const cartItems = [
      {
        images: 'https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png',
        itemTotal: {
          currencyCode: 'INR',
          amount: 2998,
          formattedPrice: '₹29.98',
        },
        quantity: '2',
        sku: 'B000062TU1',
        price: {
          currencyCode: 'INR',
          amount: '1499',
          formattedPrice: '₹14.99',
        },
        title: "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
        category: 'DVD',
        brand: 'Harry Potter',
      },
      {
        images: 'https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png',
        itemTotal: {
          currencyCode: 'INR',
          amount: 29998,
          formattedPrice: '₹299.98',
        },
        quantity: '2',
        sku: '20190322TU1',
        price: {
          currencyCode: 'INR',
          amount: '14999',
          formattedPrice: '₹149.99',
        },
        title: 'Acer full edition monitor',
        category: 'Laptop',
        brand: 'Acer',
      },
      {
        images: 'https://static.acer.com/up/Resource/Acer/Acer_Gaming/IEM_Katowice_2018/20180209/Predator_XB241.png',
        itemTotal: {
          currencyCode: 'INR',
          amount: 24999,
          formattedPrice: '₹249.99',
        },
        quantity: '1',
        sku: 'predatorxb2',
        price: {
          currencyCode: 'INR',
          amount: '24999',
          formattedPrice: '₹249.99',
        },
        title: 'Acer Monitor Predator series; Game at unimaginable speeds. Lightning-fueled refresh rates let you unleash your maximum potential.',
        category: 'Monitor',
        brand: 'Acer',
      },
      {
        ASIN: 'B000062TU1',
        itemTotal: {
          currencyCode: 'INR',
          amount: 1499,
          formattedPrice: '₹14.99',
        },
        quantity: '1',
        title: "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
        price: {
          currencyCode: 'INR',
          amount: '1499',
          formattedPrice: '₹14.99',
        },
      },
    ];
    const sku = 'B000062TU1';
    const quantity = 2;
    const updateQuantity = updateItemQuantity(cartItems[0], sku, quantity);
    expect(updateQuantity).toBe(quantity);
  });

  test('should be able to decrement the quantity', () => {
      const cartItems = [
          {
              "images": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
              "quantity": "2",
              "sku": "B000062TU1",
              "title": "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
              "category": "DVD",
              "brand": "Harry Potter"
          },
          {
              "images": "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png",
              "quantity": "2",
              "sku": "20190322TU1",
              "title": "Acer full edition monitor",
              "category": "Laptop",
              "brand": "Acer"
          }
          
      ];
      const mocksku = "B000062TU1";
      const quantity = 1;
      const responseQuantity = updateItemQuantity(cartItems[0], mocksku, quantity);
      expect(responseQuantity).toBe(1);
      const findProudctWithQtyOne = findProduct(cartItems, mocksku);
      expect(findProudctWithQtyOne).not.toBeUndefined();
      // again reduct the quantity
      const secondResponseQty = updateItemQuantity(cartItems[1], "20190322TU1", 3);
      expect(secondResponseQty).toBe(3);
      const findProudctWithZeroQty = findProduct(cartItems, "20190322TU");
      expect(findProudctWithZeroQty).toBeUndefined();
  });
});
