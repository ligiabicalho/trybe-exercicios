const mysql = require('mysql2/promise');
// necessário colocar o /promise !!!

require('dotenv').config(); // npm i dotenv

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTION_LIMIT,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT,
});

module.exports = connection;