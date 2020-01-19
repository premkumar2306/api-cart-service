'use strict';

const uuid = require('uuid');
const formatUPC = require('./formatUPC');
module.exports = (product) => {
    if (!product || product.title === '') {
        return;
    }
    const timestamp = new Date().getTime();
    const data = {
        pk: product.mfgNumber, //uuid.v1(),
        sk: `content_${product.mfgNumber}`,
        mfgNumber: product.mfgNumber,
        upc: formatUPC(product.upc),
        ASIN: product.ASIN,
        ean: product.ean,
        brand: product.brand,
        title: product.title,
        description: product.description,
        productGroup: product.productGroup,
        productTypeName: product.productTypeName,
        weight: product.ingram_weight,
        imgLink: product.images[0].HighImg,
        images: product.images,
        additionalImageLink: product.images[0].LowImg,
        mobileLink: product.images[0].HighImg,
        specification: product.specification,
        createdAt: timestamp,
        updatedAt: timestamp,
    }
    return data;
};