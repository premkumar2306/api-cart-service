# Shopping cart


## What's in this repository?

This is a shopping cart manangement repo: Using serverless framework and node:12.x lamdba and dynamodb as backend
 * create a new cart
``` bash
.
├── functions               
│   ├── cartItem
│   │   └── update
│   ├── checkout
│   │   ├── razorpay
│   │   ├── stripe
│   │   └── zoho
│   ├── create
│   │   ├── handler
│   │   └──  create.json
│   ├── update
│   │   ├── handler
│   │   └──  update.json     
│   └── delete
│       ├── handler
│       └──  delete.json    
├── helper
│   ├── calcItemTotal
│   ├── calcSubTotal
│   ├── cartItem
│   ├── mapCart
│   └── mapCartItems
├── models
│   └── cart.model
├──package.json
└── serverless.yaml
```

## Commands

### Install 
    yarn
### Local Lambda Invoke
    yarn run create-cart-local
    yarn run get-cart-local
    yarn run add-cart-item-local
    yarn run checkout-session-local
    yarn run delete-cart-local

## Remove cart

https://docs.aws.amazon.com/AWSECommerceService/latest/DG/UsingValuesReturnedbyCartCreateinOtherCartOperations.html

## TODO
- [x] Logging
- [ ] Authentication
- [ ] Monitoring
- [ ] Alerts
- [ ] Price check
- [ ] Handle Out of Stock Items
- [ ] Items With Limited Quantities
- [ ] Ninety days automatic cart cleanup and move to s3

### Query

```html 
query getCart {
  getCart(id: "11111114") {
    amount
    pk
    cartItems {
      brand
      sku
      title
      quantity
      itemTotal {
        amount
        currencyCode
        formattedPrice
      }
      price {
        amount
        currencyCode
        formattedPrice
      }
    }
    subTotal {
      amount
      currencyCode
      formattedPrice
    }
  }
}
```

### Mutation
```
mutation {
	putCart(
		cartInput: {
			pk: "123456"
			cartItems: [
				{
					sku: "1213"
					quantity: "2"
					images: "http://images.icecat.biz/img/gallery/40027482_7383642436.jpg"
					title: "Acer B7 B247Y bmiprzx 60.5 cm (23.8\") 1920 x 1080 pixels Full HD LED Black"
        },
        {
					sku: "1214"
					quantity: "2"
					images: "http://images.icecat.biz/img/gallery/40027482_7383642436.jpg"
					title: "Acer B7 B247Y bmiprzx 60.5 cm (23.8\") 1920 x 1080 pixels Full HD LED Black"
				}
			]
		}
	) {
		pk
		sk
	}
}

```