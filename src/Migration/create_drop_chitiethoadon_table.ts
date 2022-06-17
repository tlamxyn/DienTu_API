import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../Database/database';

export const createTableCHITIETHOADON = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `chitiethoadon`(`HoaDonID` int NOT NULL,`SanPhamID` int NOT NULL,`SoLuong` int DEFAULT 0,`GiaMua` int DEFAULT 0,`TrangThai` tinyint,`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` TIMESTAMP NULL);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`chitiethoadon` Table is created');
    })
}

export const dropTableCHITIETHOADON = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `chitiethoadon`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`chitiethoadon` Table is deleted');
    })
}