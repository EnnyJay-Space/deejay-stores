const axios = require("axios");

module.exports = axios.create({
  baseURL: process.env.VUE_APP_API || 'http://localhost:3000',
  timeout: 5000,
});
