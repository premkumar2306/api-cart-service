'use strict';


module.exports.list = async (event, context) => {
    const params = {
        TableName: process.env.elasticURL,
    };

    return {
        statusCode: 200,
        body: JSON.stringify(params),
    };
};