import mysql, { ResultSetHeader, QueryError } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
});

/**
 * Create new database if not exist
 */
export const createDatabase = function () {
  const sql =
    "CREATE DATABASE IF NOT EXISTS dientu_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
  conn.execute(sql, (err: QueryError, result: ResultSetHeader) => {
    if (err) throw err;
    if (result.affectedRows > 0) console.log("Database created");
    if (result.affectedRows === 0) console.log("Database exists");
  });
};

/**
 * If database doen't exist, log result in console and exit
 * If database exists, and have result, mean database had existed and is deleted
 */
export const droptDatabase = function () {
  const sql = "DROP DATABASE dientu_db";
  conn.execute(sql, (err: QueryError|null, result: ResultSetHeader) => {
    if (err) {
      if (err.code == "ER_DB_DROP_EXISTS") {
        console.log("Database doesn't exist");
        process.exit();
      }
      else {
        console.log(err.message);
      }
    }
    if (result) {
      console.log("Database is deleted");
    }
  });
};
