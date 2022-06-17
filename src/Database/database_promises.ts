import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const conn = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  });
};

const pool = async () => {
  return await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
};
const database = {
  conn: conn,
  pool: pool,
};

export default database;