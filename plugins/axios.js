const axios = require("axios");

module.exports = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  timeout: 5000,
});
