const { pushStream } = require('dynamodb-stream-elasticsearch');

const { ES_ENDPOINT, INDEX, TYPE } = process.env;

module.exports.stream = async function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    try {
        await pushStream({ event, endpoint: ES_ENDPOINT, index: INDEX, type: TYPE });
        console.log(`Successfully processed ${event.Records.length} records.`);
        return `Successfully processed ${event.Records.length} records.`
    } catch (error) {
        console.log(`Error ${error}`)
    }
  };