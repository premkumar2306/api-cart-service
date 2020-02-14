# Shopping cart


## What's in this repository?

This is a shopping cart manangement repo: Using serverless framework and node:12.x lamdba and dynamodb as backend
 * create a new cart (atleast one item needed)
``` bash
.
├── functions               
│   └── cartItem
│   │   ├── add    
│   │   ├── update     
│   │   └── delete
│   ├── checkout
│   │   ├── checkout.html
│   │   ├── create-stripe-checkout
│   │   └── mapToStripe
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
    npm install
### Local Lambda Invoke
    npm run create-cart-local
    npm run get-cart-local
    npm run delete-cart-local
    npm run add-cart-item-local
    npm run update-cart-item-local
    npm run del-cart-item-local

## Remove cart

https://docs.aws.amazon.com/AWSECommerceService/latest/DG/UsingValuesReturnedbyCartCreateinOtherCartOperations.html

## TODO
- [ ] Authentication
- [ ] Logging
- [ ] Monitoring
- [ ] Alerts
- [ ] Handle Out of Stock Items
- [ ] Items With Limited Quantities
- [ ] Validate the create cart - It is not possible to create an empty cart. At least, one item must be added.
- [ ] Ninety days automatic cart cleanup and move to s3

| Category        | Description 
| :------------- |:-------------|
| ForEachQuantityXGetQuantityFreeX	      | For a specified number of items, you receive additional items for free. For example, buy six dozen eggs and get a dozen eggs free.|
| BuyAmountXGetSimpleShippingFreeX	      | For a specified dollar amount, you receive free shipping. For example, spend $25 and your item is shipped free of charge.|
| BuyAmountXGetAmountOffX	      	      | For a specified dollar amount, you receive a discounted price. For example, spend $25 and get a $5 discount.|
| BuyQuantityXGetAmountOffX	      	   | For a specified number of items, you receive a discounted price. For example, buy three balls and get a $5 discount.|
| BuyQuantityXGetPercentOffX	      	   | For a specified number of items, you receive a percentage discount. For example, buy three balls and get a 15% discount.|
