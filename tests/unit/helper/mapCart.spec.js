const mapCart = require('../../../helper/mapCart');

describe('map Cart', () => {
  test('should map the req to cart and calcualte the item total and subtotal ', () => {
    const cart = {
      cartId: '{{guid}}',
      cartItems: [
        {
          brand: 'Harry Potter',
          sku: 'B000062TU1',
          quantity: '2',
          images: 'https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png',
          title: "Harry Potter and the Sorcerer's Stone (Full Screen Edition) (Harry Potter 1)",
          category: 'DVD',
          price: {
            amount: '1499',
            currencyCode: 'INR',
            formattedPrice: '₹14.99',
          },
        },
        {
          brand: 'Acer',
          sku: '20190322TU1',
          category: 'Laptop',
          quantity: '2',
          images: 'https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Photogallery/20190322/Acer-Swift-7-SF714-52T-Black-photogallery-03.png',
          title: 'Acer full edition monitor',
          price: {
            amount: '14999',
            currencyCode: 'INR',
            formattedPrice: '₹149.99',
          },
        },
      ],
    };
    const response = mapCart(cart);
    expect(response.subTotal.amount).toBe(32996);
    expect(response.subTotal.formattedPrice).toBe('₹329.96');
  });
});
