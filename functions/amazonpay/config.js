'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const fs = require('fs');
// Please Update the below mentioned values before running test cases
const configArgs = async function () {
    // Download the pem file from the s3 bucket
    try {
        const params = {
            Bucket: "pn-daily-product-feed",
            Key: "key/amazonpay/private.pem"
        };
        var pemfile = await s3.getObject(params).promise();
        console.log('pemfile downloaded..')
        return {
            'publicKeyId': 'AGRH7HMXX54UQYGQ5HHGOCUQ', // Enter your Public Key ID
            'privateKey': pemfile.Body, // Path to your private key file
            'region': 'us',
            'sandbox': true
        }
    } catch (error) {
        console.log('pemfile downloaded failed..')
        console.log(error);
        return;
    }
};



module.exports = configArgs;