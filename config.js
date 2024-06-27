require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  basicAuthUsername: process.env.BASIC_AUTH_USERNAME,
  basicAuthPassword: process.env.BASIC_AUTH_PASSWORD
};
