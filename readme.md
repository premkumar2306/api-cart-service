## Create cart

    * Add items to cart

    * Update items on cart

## Remove cart

https://docs.aws.amazon.com/AWSECommerceService/latest/DG/UsingValuesReturnedbyCartCreateinOtherCartOperations.html

## What's in this repository?

This is a shopping cart manangement repo: Using serverless framework and node:12.x lamdba and dynamodb as backend

``` bash
.
├── functions               <-- Business functions
│   ├── get.js              <-- get cart by the cartId
│   ├── create.js           <-- create a new cart (atleast one item needed)
│   ├── delete.js           <-- delete cart by id (expires - 90days)
│   └── cartItem            <-- Individual cart item
│      ├── add.js           <-- add a new item; if already exist then will increment the quantity
│      ├── update.js        <-- update existing item based on the quantity (quantity - 1  || del item.count<0 )
│      └── delete.js        <-- delete an item from the cart
├── mapper
│   └── mapcart.js           <-- Helper function code represents mapping list price and item price
├── models                  <-- /// TODO
│   └── cart.model
├──package.json              <-- All the dependencies needed.
│                             [##TODO]
└── serverless.yaml         <-- serverless template for defining and deploying serverless application resources
```

## TODO

1. Out of Stock Items
2. Items With Limited Quantities
3. Validate the create cart - It is not possible to create an empty cart. At least, one item must be added.
4. Ninety days automatic cart deletion

| Category        | Description 
| :------------- |:-------------|
| ForEachQuantityXGetQuantityFreeX	      | For a specified number of items, you receive additional items for free. For example, buy six dozen eggs and get a dozen eggs free.|
| BuyAmountXGetSimpleShippingFreeX	      | For a specified dollar amount, you receive free shipping. For example, spend $25 and your item is shipped free of charge.|
| BuyAmountXGetAmountOffX	      	      | For a specified dollar amount, you receive a discounted price. For example, spend $25 and get a $5 discount.|
| BuyQuantityXGetAmountOffX	      	   | For a specified number of items, you receive a discounted price. For example, buy three balls and get a $5 discount.|
| BuyQuantityXGetPercentOffX	      	   | For a specified number of items, you receive a percentage discount. For example, buy three balls and get a 15% discount.|
