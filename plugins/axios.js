const axios = require("axios");

module.exports = axios.create({
  // baseURL: process.env.VUE_APP_API || 'http://localhost:3000',
  baseURL: 'http://api.mediastack.com/v1/news/',
  timeout: 5000,
});
