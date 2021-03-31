const axios = require('axios');

const url =
  'https://vini.nh.gov/providers/s/sfsites/aura?r=5&aura.ApexAction.execute=1';

const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

const makeRequest = (payload) => axios.post(url, payload, { headers });

module.exports = makeRequest;
