'use strict';

// const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const formatUPC = require('../common/formatUPC');
module.exports = async (icecat, product, amazon_mws) => {
    if (!icecat || icecat.id === '') {
        return;
    }
    const timestamp = new Date().getTime();
    const data = {
        pk: `upc#${formatUPC(product.ingram_UPC)}`,
        sk: `mfgNo#${product.mfgNumber}`,
        mfgNumber: product.mfgNumber,
        id: icecat.id,
        upc: formatUPC(product.ingram_UPC),
        title: icecat.title,
        ASIN: amazon_mws.ASIN,
        brand: amazon_mws.brand,
        productGroup: amazon_mws.productGroup,
        productTypeName: amazon_mws.productTypeName,
        amazon: amazon_mws.amazon,
        description: icecat.description,
        sellingPrice: Math.min(product.ingram_sellingPrice | 0, product.techdata_sellingPrice | 0),
        retailPrice: Math.max(product.ingram_retailPrice | 0, product.techdata_retailPrice | 0),
        selectedDealer: product.ingram_id ? `ingram_${product.ingram_id}` : `techdata_${product.techdata_id}`,
        weight: product.ingram_weight,
        ean: icecat.ean,
        imgLink: icecat.images[0].HighImg,
        additionalImageLink: icecat.images[0].LowImg,
        mobileLink: icecat.images[0].HighImg,
        specification: icecat.specification,
        images: icecat.images,
        createdAt: timestamp,
        updatedAt: timestamp,
    }
    const params = {
        TableName: 'products',
        Item: data,
    };
    try {
        const response = await dynamodb.put(params).promise()
        console.log(JSON.stringify(response));
    } catch (error) {
        return new Error('Error');
    }
};