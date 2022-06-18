import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../database/database';

export const createTableGIOHANG = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `giohang`(`TaiKhoanID` int NOT NULL,`SanPhamID` int NOT NULL,`SoLuong` int DEFAULT 1);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`giohang` Table is created');
    })
}

export const dropTableGIOHANG = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `giohang`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`giohang` Table is deleted');
    })
}