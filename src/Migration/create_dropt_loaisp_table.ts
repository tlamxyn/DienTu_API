import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from "../Database/database";
import { createDatabase } from "./create_drop_database";

export const createTableLOAISP = function () {
  const conn = database.conn;

  const sql =
    "CREATE TABLE `loaisp`(`LoaiSPID` int AUTO_INCREMENT PRIMARY KEY NOT NULL, `TenLoai` varchar(255) UNIQUE NOT NULL, `TrangThai` tinyint DEFAULT 1,`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,`updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` TIMESTAMP NULL);";

  conn.execute(sql, (err: QueryError | null, result: ResultSetHeader) => {
    if (err) console.log(err.message);
    if (result) console.log("`loaisp` Table is created");
  });
};

export const dropTableLOAISP = function () {
  const conn = database.conn;

  const sql = "DROP TABLE `loaisp`";

  conn.execute(sql, (err: QueryError | null, result: ResultSetHeader) => {
    if (err) console.log(err.message);
    if (result) console.log("`loaisp` Table is deleted");
  });
};
