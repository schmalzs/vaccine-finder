require('dotenv').config();
const buildPayload = require('./src/buildPayload');
const getInput = require('./src/getInput');
const makeRequest = require('./src/makeRequest');
const mapResponse = require('./src/mapResponse');

const go = async () => {
  try {
    const input = getInput();
    const payload = buildPayload(input);
    const res = await makeRequest(payload);
    const records = mapResponse(res);
    console.table(records);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

go();
