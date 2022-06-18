import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../database/database';

export const createTableDANHGIA = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `danhgia`(`TaiKhoanID` int NOT NULL,`SanPhamID` int NOT NULL,`SoSao` int DEFAULT 0,`NoiDung` text,`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`danhgia` Table is created');
    })
}

export const dropTableDANHGIA = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `danhgia`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`danhgia` Table is deleted');
    })
}