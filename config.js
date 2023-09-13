require('dotenv').config();

const { JWT_SECRET } = process.env;
const { PORT = '3001' } = process.env;
const { DB_URL = 'mongodb://127.0.0.1:27017/moviesdb' } = process.env;
const { NODE_ENV } = process.env;
const JWT_SECRET_DEV = 'secret-key';

module.exports = {
  JWT_SECRET,
  JWT_SECRET_DEV,
  PORT,
  DB_URL,
  NODE_ENV,
};
