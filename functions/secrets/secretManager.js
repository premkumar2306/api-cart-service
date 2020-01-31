const AWS = require('aws-sdk');

AWS.config.logger = console;

const client = new AWS.SecretsManager({
    region: "us-east-1",
});

async function getAwsSecretAsync (secretName) {
  try {
    const response = await client.getSecretValue({ SecretId: secretName }).promise();
    return JSON.parse(response.SecretString);
  } catch (error) {
    console.error('Error occurred while retrieving AWS secret');
    console.error(error);
  }
}

module.exports =  async function() {
  const secret = await getAwsSecretAsync('/external/');
  return secret;
}